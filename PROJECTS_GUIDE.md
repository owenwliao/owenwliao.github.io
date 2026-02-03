# How to Add New Projects

This guide explains how to add new projects to your website using the modular system.

## Quick Steps

1. **Add project data** to `js/projects-data.js`
2. **Create project page** by copying the template
3. **Done!** The project card will automatically appear on the homepage

## Detailed Instructions

### Step 1: Add Project Data

Open `js/projects-data.js` and add a new object to the `projectsData` array:

```javascript
{
  id: 'your-project-id',           // Unique identifier (used for filename)
  title: 'Your Project Name',        // Display name
  date: 'Month Year',                // e.g., 'January 2025'
  description: 'Short description',  // Shown on homepage card
  shortDescription: 'Same as description', // Keep same for now
  image: './img/project images/your-image.png', // Path to project image
  tags: ['Tag1', 'Tag2'],            // Array of tag labels
  tagClasses: ['tag1', 'tag2'],      // CSS classes for tags (lowercase, hyphenated)
  content: `
    <h2>About Your Project</h2>
    <p>Detailed description of your project here.</p>
    
    <h3>Key Features</h3>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
    
    <h3>Technical Details</h3>
    <p>More information about the project...</p>
  `
}
```

**Important Notes:**
- The `id` should be lowercase and hyphenated (e.g., `my-awesome-project`)
- The `id` will be used as the filename for the project page
- Make sure your image exists at the specified path
- Available tag classes: `hackathon`, `product`, `fpga`, `arcade`, `circuit`, `health`
- You can add new tag classes in `style.css` if needed

### Step 2: Create Project Page

1. Copy `projects/_template.html`
2. Rename it to `projects/[your-project-id].html` (match the `id` from step 1)
3. That's it! The page will automatically load content from the data file

**Example:**
- If your `id` is `my-awesome-project`
- Create `projects/my-awesome-project.html`

### Step 3: Verify

1. Refresh your homepage - the project card should appear automatically
2. Click the card - it should link to your project page
3. The project page should display all your content

## Example: Adding "Robot Arm" Project

### 1. Add to `projects-data.js`:

```javascript
{
  id: 'robot-arm',
  title: 'Robot Arm',
  date: 'March 2025',
  description: 'A 6-DOF robotic arm controlled via Arduino.',
  shortDescription: 'A 6-DOF robotic arm controlled via Arduino.',
  image: './img/project images/robot-arm.jpg',
  tags: ['Robotics', 'Arduino'],
  tagClasses: ['circuit', 'product'],
  content: `
    <h2>About Robot Arm</h2>
    <p>This project involved building a 6-degree-of-freedom robotic arm...</p>
    
    <h3>Components</h3>
    <ul>
      <li>Arduino Uno</li>
      <li>6 servo motors</li>
      <li>Custom 3D printed parts</li>
    </ul>
  `
}
```

### 2. Create `projects/robot-arm.html`:

Just copy `projects/_template.html` and rename it. No editing needed!

## Adding New Tag Styles

If you need a new tag style, add it to `style.css`:

```css
.tag.your-tag-class { 
  background-color: #your-color; 
  color: #your-text-color; 
}
```

## Tips

- Keep project IDs simple and descriptive
- Use consistent date formatting (e.g., "Month Year")
- Images should be optimized for web (not too large)
- The `content` field supports HTML, so you can add links, images, etc.
- Projects appear in the order they're listed in the array
