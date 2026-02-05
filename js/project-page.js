// Script to dynamically render project pages
document.addEventListener('DOMContentLoaded', function() {
  // Get project ID from URL (e.g., projects/trot.html -> trot)
  // Handle both absolute and relative paths
  let pathname = window.location.pathname;
  if (pathname.includes('projects/')) {
    const pathParts = pathname.split('projects/');
    const filename = pathParts[pathParts.length - 1];
    var projectId = filename.replace('.html', '');
  } else {
    // Fallback: get from filename directly
    const pathParts = pathname.split('/');
    const filename = pathParts[pathParts.length - 1];
    var projectId = filename.replace('.html', '');
  }
  
  // Get project data
  const project = getProjectById(projectId);
  
  const toEmbedUrl = (url) => {
    if (!url) return '';
    try {
      const parsed = new URL(url);
      const host = parsed.hostname;
      // Handle YouTube watch and share links
      if (host.includes('youtube.com')) {
        const vid = parsed.searchParams.get('v');
        if (vid) return `https://www.youtube.com/embed/${vid}`;
      }
      if (host.includes('youtu.be')) {
        const segments = parsed.pathname.split('/').filter(Boolean);
        if (segments.length) return `https://www.youtube.com/embed/${segments[0]}`;
      }
      return url;
    } catch (e) {
      return url;
    }
  };
  
  if (!project) {
    console.error('Project not found:', projectId);
    const projectContent = document.getElementById('project-content');
    if (projectContent) {
      projectContent.innerHTML = '<h1>Project not found</h1><p><a href="../index.html">Return to home</a></p>';
    }
    return;
  }
  
  // Update page title
  document.title = `${project.title} - Owen Liao`;
  
  // Render project content
  const projectContent = document.getElementById('project-content');
  if (projectContent) {
    // Adjust image path based on current location
    let imagePath = project.image;
    if (window.location.pathname.includes('projects/')) {
      // If we're in projects folder, adjust path
      imagePath = '../' + project.image.replace('./', '');
    }
    
    // Adjust photo paths if they exist
    let photosHTML = '';
    if (project.photos && project.photos.length > 0) {
      const photoPaths = project.photos.map(photo => {
        if (window.location.pathname.includes('projects/')) {
          return '../' + photo.replace('./', '');
        }
        return photo;
      });
      photosHTML = `
        <div class="project-photos-section">
          <h3>Photos</h3>
          <div class="project-photos-grid">
            ${photoPaths.map(photo => `
              <div class="project-photo-item">
                <img src="${photo}" alt="Project photo" class="project-photo">
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    let videoHTML = '';

    // If the project defines `videoBlocks`, render those (allows multiple hardcoded videos with titles/captions)
    if (project.videoBlocks && project.videoBlocks.length > 0) {
      const blocks = project.videoBlocks.map(block => {
        const originalSrc = block.src || '';
        // Only prefix relative/local paths for pages under `projects/`.
        let src = originalSrc;
        const isExternal = /^https?:\/\//i.test(originalSrc) || /^\/\//.test(originalSrc);
        if (!isExternal && window.location.pathname.includes('projects/')) {
          src = '../' + originalSrc.replace('./', '');
        }

        const isVideoFile = /\.(mp4|webm|ogg)$/i.test(originalSrc) || !isExternal;

        return `
          <div class="project-video-block">
            <div class="project-video-aspect">
              ${isVideoFile ? `
                <video controls preload="metadata" poster="${block.poster || ''}">
                  <source src="${src}" type="video/${src.split('.').pop().toLowerCase()}">
                  Your browser does not support the video tag.
                </video>
              ` : `
                <iframe src="${toEmbedUrl(originalSrc)}" title="${block.title || project.title} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              `}
            </div>
            ${block.title ? `<h4 class="project-video-title">${block.title}</h4>` : ''}
            ${block.caption ? `<p class="project-video-caption">${block.caption}</p>` : ''}
          </div>
        `;
      }).join('');

      videoHTML = `
        <div class="project-video-section">
          <h3>Videos</h3>
          <div class="project-video-grid">
            ${blocks}
          </div>
        </div>
      `;

    } else if (project.videoUrl) {
      // Adjust video path for project pages (same pattern used for images)
      const originalVideoUrl = project.videoUrl || '';
      const isExternalUrl = /^https?:\/\//i.test(originalVideoUrl) || /^\/\//.test(originalVideoUrl);
      // Only prefix relative/local paths for pages under `projects/`.
      let videoPath = originalVideoUrl;
      if (!isExternalUrl && window.location.pathname.includes('projects/')) {
        videoPath = '../' + originalVideoUrl.replace('./', '');
      }

      // If it's a direct video file (mp4/webm/ogg) or a local path, render a <video>
      const isVideoFile = /\.(mp4|webm|ogg)$/i.test(originalVideoUrl) || !isExternalUrl;

      if (isVideoFile) {
        videoHTML = `
          <div class="project-video-section">
            <h3>Video</h3>
            <div class="project-video-grid">
              <div class="project-video-block">
                <div class="project-video-aspect">
                  <video class="project-video" controls>
                    <source src="${videoPath}" type="video/${videoPath.split('.').pop().toLowerCase()}">
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        // Fallback to embedding (YouTube, Vimeo, etc.)
        const embedUrl = toEmbedUrl(originalVideoUrl);
        videoHTML = `
          <div class="project-video-section">
            <h3>Video</h3>
            <div class="project-video-grid">
              <div class="project-video-block">
                <div class="project-video-aspect">
                  <iframe src="${embedUrl}" title="${project.title} video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>
        `;
      }
    }
    
    // Special styling for internship/special pages
    const headerClass = project.isSpecialPage ? 'project-page-header special-page-header' : 'project-page-header';
    
    // Extract date header from content if it exists (for special pages)
    let contentToRender = project.content;
    let dateHeaderHTML = `<p class="project-page-date">${project.date}</p>`;
    
    // Check if content starts with date header
    const dateHeaderMatch = contentToRender.match(/<p class="project-date-header">(.*?)<\/p>/);
    if (dateHeaderMatch) {
      dateHeaderHTML = dateHeaderMatch[0];
      contentToRender = contentToRender.replace(dateHeaderMatch[0], '').trim();
    }
    
    // Top action buttons: play (itch.io) and optional GitHub "View source"
    let topButtonsHTML = '';
    const topButtons = [];
    if (project.id === 'fps-game-design') {
      topButtons.push(`<a class="title-about-btn button-text project-play-btn" href="https://goosey-goose.itch.io/goose-goose" target="_blank" rel="noopener">Play on itch.io</a>`);
    }
    if (project.pdfUrl) {
      topButtons.push(`<a class="title-about-btn button-text" href="${project.pdfUrl}" target="_blank" rel="noopener">View Paper</a>`);
    }
    if (project.githubUrl) {
      topButtons.push(`<a class="title-about-btn button-text" href="${project.githubUrl}" target="_blank" rel="noopener">View source (GitHub)</a>`);
    }
    if (topButtons.length) {
      topButtonsHTML = `
        <div class="project-play-button-container">
          ${topButtons.join('\n')}
        </div>
      `;
    }

    // If project is marked compact, omit the large header image container
    const headerImageHTML = (!project.isCompact && imagePath) ? `
      <div class="project-page-image-container">
        <img src="${imagePath}" alt="${project.title}" class="project-page-image">
      </div>
    ` : '';

    projectContent.innerHTML = `
      <div class="${headerClass}">
        ${headerImageHTML}
        <div class="project-page-header-info">
          <h1 class="project-page-title">${project.title}</h1>
          ${dateHeaderHTML}
          <div class="project-page-tags">
            ${project.tags.map((tag, index) => 
              `<span class="tag ${project.tagClasses[index]}">${tag}</span>`
            ).join('')}
          </div>
        </div>
      </div>
      ${topButtonsHTML}
      <div class="project-page-body">
        ${contentToRender}
        ${videoHTML}
        ${photosHTML}
      </div>
    `;
  }
});
