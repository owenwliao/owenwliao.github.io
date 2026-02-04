// Projects data - Updated for Owen Liao Portfolio
const projectsData = [
  {
    id: 'rapiscan-internship',
    title: 'Hardware Engineering Internship',
    date: 'Summer 2025',
    sortDate: '2025-06',
    category: 'Rapiscan Systems',
    isSpecialPage: true,
    description: 'Hardware engineering internship supporting Mini Z handheld X-ray systems through debugging, validation, and system integration.',
    shortDescription: 'Hardware internship focused on cable fabrication, board validation, IR-based diagnostics, and system-level debugging.',
    image: './img/project images/rapiscan/photo1.png',
    videoUrl: '',
    videoBlocks: [],
    tags: ['Internship', 'Hardware', 'Diagnostics'],
    tagClasses: ['work', 'diagnostics', 'altium'],
    photos: [
      // './img/project images/rapiscan/photo1.jpg',
      // './img/project images/rapiscan/photo2.jpg',
      // './img/project images/rapiscan/photo3.jpg'
    ],
    content: `
      <h2>Hardware Engineering Internship at Rapiscan Systems</h2>
      <p class="project-date-header">Summer 2025</p>
      <p>
        Supported the development, validation, and debugging of Mini Z handheld X-ray systems through hands-on hardware work,
        system diagnostics, and technical documentation.
      </p>
      
      <h3>Cable Fabrication & Assembly</h3>
      <ul>
        <li>
          <strong>Custom Interlock & Source Cables:</strong> Built and modified 21+ high-reliability cables, including interlock,
          PMT, and X-ray source assemblies. The interlock cable required application-specific tailoring rather than strict adherence
          to drawings due to test setup constraints.
        </li>
        <li>
          <strong>Open Test Rig Fabrication:</strong> Built and hotfixed cables on open rigs to extend interconnects and enable
          diagnostics. Performed fine-pitch soldering on 11-pin FFC extension boards with careful routing to reduce EMI.
        </li>
      </ul>
      
      <h3>Board Testing & Validation</h3>
      <ul>
        <li>
          <strong>PCBA Validation:</strong> Tested 20+ analog and digital boards from manufacturing using DMMs and test fixtures.
          Documented results and clarified test procedures to improve repeatability and manufacturing efficiency.
        </li>
        <li>
          <strong>Failure Analysis:</strong> Used DMM measurements and documented test sequences to isolate electrical faults
          during board bring-up and system testing.
        </li>
      </ul>
      
      <h3>System-Level Debugging</h3>
      <ul>
        <li>
          <strong>Thermal & Electrical Diagnostics:</strong> Used IR thermal imaging and electrical measurements to identify
          shorts-to-ground that caused overheating in the chopper wheel subsystem.
        </li>
        <li>
          <strong>Detector & LED Issues:</strong> Diagnosed faulty detector and LED behavior by referencing power board schematics
          and documenting findings using structured problem-solving methods.
        </li>
        <li>
          <strong>Motor Safety & Motion Analysis:</strong> Assisted mechanical engineering with feasibility analysis for a Hall-effect
          jack system. Measured current magnitude and duration using a current probe and reverse-engineered vendor cables to ensure
          safe bidirectional motion of radioactive material.
        </li>
      </ul>
      
      <h3>R&D & Documentation</h3>
      <ul>
        <li>
          <strong>Axis Camera Evaluation:</strong> Built a test rig and interface circuitry to evaluate next-generation cameras
          planned for future system upgrades. Work streamlined an already-planned transition and demonstrated compatibility
          with existing X-ray systems.
        </li>
        <li>
          <strong>Science Team Pulley System:</strong> Designed and assembled a ~100 ft motorized pulley system for controlled
          material movement. Integrated a programmable motor, relays, fuses, and switches on a DIN rail layout.
        </li>
        <li>
          <strong>Engineering Workflow:</strong> Managed tasks and documentation in Azure DevOps, authored ECRs, and completed
          Altium Designer Essentials training.
        </li>
      </ul>
      
      <h3>Technologies & Tools</h3>
      <p>
        Altium Designer, Azure DevOps, Oracle Agile, IR Thermal Camera, Digital Multimeter,
        Oscilloscopes, Current Probes, DIN Rail Systems, FFC Connectors, Cable Assembly Tools
      </p>
    `
  },
  {
    id: 'autonomous-robot',
    title: 'Autonomous Lane-Following Robot',
    date: 'Fall 2025',
    sortDate: '2025-09',
    category: 'Academic Projects',
    photos: [],
    description: 'Autonomous robot using RGB vector classification and sensor-driven recovery logic.',
    shortDescription: 'Designed an Arduino-based autonomous robot using RGB vector math and analog sensors.',
    image: './img/project images/jrdesign/photo1.png',
    videoUrl: 'https://youtu.be/v4DlyU9EuIg',
    videoBlocks: [
      {
        src: 'https://youtu.be/v4DlyU9EuIg',
        title: 'Solo Bot Demo',
        caption: 'Demo showing lane following and recovery behavior.'
      },
      {
        src: 'https://youtu.be/9I270zlmovw',
        title: 'Joint Bot Demo',
        caption: 'Demo showing communication, following, and recovery behavior.'
      }
    ],
    tags: ['Robotics', 'C++', 'Arduino', 'Onshape'],
    githubUrl: 'https://github.com/jack898/junior-design',
    tagClasses: ['robotics', 'cpp', 'embedded', 'onshape'],
    content: `
      <h2>Autonomous Robotics & Sensor Fusion</h2>
      <p>
        Junior Design project integrating embedded software, analog sensing, and mechanical fabrication
        to create a self-navigating lane-following robot.
      </p>
      
      <figure class="project-inline-figure right"> 
          <img src="../img/project images/jrdesign/3d color sep.png" alt="Description" class="project-inline-image">
          <figcaption class="project-figcaption">3D visualization of color vectors.</figcaption>
      </figure>
      <h3>Control Logic & Algorithms</h3>
      <ul>
        <li>
          <strong>RGB Vector Classification:</strong> Represented measured RGB sensor values as vectors and classified surface color
          by computing the Euclidean norm relative to pre-programmed RGB vectors for red, green, blue, and black.
        </li>
        <li>
          <strong>Lane Recovery Logic:</strong> Implemented a sweep-based recovery algorithm that searched at increasing offsets
          when the robot lost the lane, enabling robust re-acquisition.
        </li>
      </ul>
      
      <h3>Mechanical & Hardware Design</h3>
      <figure class="project-inline-figure right medium"> 
          <img src="../img/project images/jrdesign/chassis.jpg" alt="Description" class="project-inline-image">
          <figcaption class="project-figcaption">Laser-cut chassis with IR distance sensors attached.</figcaption>
      </figure>
      <ul>
        <li>
          <strong>Laser-Cut Chassis:</strong> Designed a minimal rectangular chassis optimized for material efficiency and fabricated
          via laser cutting.
        </li>
        <li>
          <strong>3D-Printed Sensor Housings:</strong> Printed custom enclosures for the IR sensor to ensure the IR LED and detector
          were aligned in the same direction. Designed a square LED housing with mounting holes for consistent geometry.
        </li>
        <li>
          <strong>Motor Control:</strong> Used an H-bridge to drive DC motors based on real-time ADC readings from analog sensors.
        </li>
      </ul>
      
      <h3>Hardware Stack</h3>
      <p>Arduino (C++), H-Bridge Motor Drivers, RGB Sensors, IR Sensors, Onshape CAD</p>

      <h3>Schematics & Designs</h3>
      <div class="project-fullwidth-images">
        <figure class="project-figure">
          <img src="../img/project images/jrdesign/Team-Cookin_-Schematic-v2.svg" alt="Schematic" class="project-fullwidth-image">
          <figcaption class="project-figcaption">Schematic.</figcaption>
        </figure>
        <figure class="project-figure">
          <img src="../img/project images/jrdesign/Team-Cookin_-Wire-Diagram-v2.svg" alt="Wiring diagram" class="project-fullwidth-image small-85 rotate-ccw">
          <figcaption class="project-figcaption">Wiring diagram.</figcaption>
        </figure>
      </div>
    `
  },
  {
    id: 'meow-memory',
    title: 'Meow Memory (FPGA)',
    date: 'December 2024',
    sortDate: '2024-12',
    category: 'Academic Projects',
    photos: [],
    description: 'FPGA-based memory game implemented using VHDL and finite state machines.',
    shortDescription: 'Implemented a VHDL memory game using state machines and timing logic.',
    image: './img/project images/meow/photo1.png',
    videoUrl: 'https://youtu.be/_TI-8UotO0I',
    tags: ['VHDL', 'Digital Logic'],
    githubUrl: 'https://github.com/owenwliao/ES4-Meow-Memory',
    tagClasses: ['vhdl', 'fpga'],
    content: `
      <h2>Hardware Description Language Design</h2>
      <p>
        Implemented a memory-based game on an FPGA platform using VHDL, focusing on state-machine design
        and timing control.
      </p>
      
      <h3>Logic Architecture</h3>
      <ul>
        <li>
          <strong>Finite State Machines:</strong> Designed primary states for listening to input sequences
          and playing back sequences, with intermediate states for partial correctness, completion, and failure.
        </li>
        <li>
          <strong>Timing & Input Detection:</strong> Used timer-based logic and rising-edge detection to manage
          user input and sequence pacing.
        </li>
      </ul>
    `
  },
  {
    id: 'spirometer',
    title: 'Analog Spirometer Prototype',
    date: 'December 2024',
    sortDate: '2024-12',
    category: 'Academic Projects',
    photos: [],
    description: 'Basic analog circuit prototype for breath-strength measurement.',
    shortDescription: 'Built a simple analog spirometer prototype using op-amps and LEDs.',
    image: './img/project images/spirometer/photo1.png',
    videoUrl: 'https://youtu.be/lneRE4uUu6w',
    tags: ['Analog', 'Healthcare'],
    tagClasses: ['analog', 'circuit'],
    content: `
      <h2>Analog Signal Conditioning</h2>
      <p>
        Introductory analog electronics project demonstrating basic signal amplification
        and visual feedback for breath pressure.
      </p>
      
      <h3>Design Overview</h3>
      <ul>
        <li>
          <strong>Amplification:</strong> Used an op-amp circuit to amplify microphone output corresponding to breath pressure.
        </li>
        <li>
          <strong>Visual Output:</strong> Mapped analog voltage levels to LED brightness for real-time feedback.
        </li>
      </ul>
    `
  },
  {
    id: 'stm32-synth',
    title: 'Digital Dual-Channel Synthesizer',
    date: 'Spring 2025',
    sortDate: '2025-03',
    category: 'Academic Projects',
    photos: [],
    description: 'STM32 firmware project generating real-time audio waveforms.',
    shortDescription: 'Programmed an STM32 to generate dual-channel audio via DAC and timer interrupts.',
    image: './img/project images/synth/photo1.png',
    videoUrl: 'https://youtu.be/pEdnrgp-lO0',
    tags: ['Embedded C', 'STM32'],
    githubUrl: 'https://github.com/owenwliao/EE14-Digital-Synthesizer',
    tagClasses: ['embedded', 'stm32'],
    content: `
      <h2>Embedded Systems & Audio Processing</h2>
      <p>
        Developed a dual-channel digital synthesizer on an STM32 microcontroller with real-time waveform generation.
      </p>
      
      <h3>Technical Implementation</h3>
      <ul>
        <li>
          <strong>Timer-Driven DAC Output:</strong> Used a timer interrupt to feed samples to the DAC for continuous waveform output.
        </li>
        <li>
          <strong>Waveform Synthesis:</strong> Generated square, triangle, and sawtooth waves using math-based oscillators.
        </li>
        <li>
          <strong>Audio Output Stage:</strong> Integrated a dedicated audio amplifier to drive speakers with clean analog output.
        </li>
        <li>
          <strong>Dual-Channel Handling:</strong> Supported two output channels with some channel-coupling limitations.
        </li>
      </ul>
    `
  },
  {
    id: 'digital-signal-processing',
    title: 'Digital Signal Processing',
    date: 'Fall 2024',
    sortDate: '2024-09',
    category: 'Academic Projects',
    isCompact: true,
    description: 'FIR and IIR filter design for biomedical signals.',
    shortDescription: 'Designed FIR and IIR filters for ECG and EMG data in Python.',
    image: '',
    videoUrl: '',
    tags: ['Python', 'NumPy', 'SciPy', 'Signal Processing'],
    tagClasses: ['embedded', 'cpp', 'embedded', 'systems'],
    photos: [],
    content: `
      <h2>Digital Signal Processing & Filtering</h2>
      <p>Designed and analyzed digital filters for biomedical signal processing applications.</p>
      
      <h3>Filter Design</h3>
      <ul>
        <li><strong>FIR Filters:</strong> Linear-phase FIR filters for noise reduction.</li>
        <li><strong>IIR Filters:</strong> Efficient IIR filters for real-time processing.</li>
        <li><strong>Biomedical Signals:</strong> Applied techniques to ECG and EMG datasets.</li>
      </ul>
      
      <h3>Technologies & Tools</h3>
      <p>Python, NumPy, Matplotlib, SciPy</p>
    `
  },
  {
    id: 'impedance-matching',
    title: 'Electromagnetic Impedance Matching',
    date: 'Spring 2024',
    sortDate: '2024-03',
    category: 'Academic Projects',
    isCompact: true,
    description: 'Impedance matching network design for a plasma generator.',
    shortDescription: 'Designed RF matching networks using Smith chart analysis.',
    image: './img/project images/matching/photo1.png',
    videoUrl: '',
    tags: ['Circuit Design', 'Smith Charts', 'RF'],
    tagClasses: ['circuit', 'analog', 'embedded'],
    photos: [],
    content: `
      <h2>Impedance Matching System Design</h2>
      <p>Designed an RF impedance matching network to maximize power transfer and minimize reflections.</p>
      
      <h3>Design Approach</h3>
      <ul>
        <li><strong>Smith Chart Analysis:</strong> Used impedance plane visualization to guide component selection.</li>
        <li><strong>Double-Stub Matching:</strong> Implemented a double-shorted stub configuration.</li>
        <li><strong>Component Selection:</strong> Selected inductors and capacitors to meet matching targets.</li>
      </ul>
    `
  },
  {
    id: 'fps-game-design',
    title: 'First-Person Shooter Demo',
    date: 'Spring 2025',
    sortDate: '2025-03',
    category: 'Academic Projects',
    description: 'Team-developed FPS demo built in Unity.',
    shortDescription: 'Developed a multiplayer FPS prototype using Unity and C#.',
    image: './img/project images/goose/photo1.png',
    videoUrl: 'https://www.youtube.com/watch?v=y4py64-kFPM',
    tags: ['Unity', 'Game Development', 'C#'],
    githubUrl: 'https://github.com/LordofMankid/goose-goose',
    tagClasses: ['embedded', 'cpp', 'systems'],
    photos: [],
    content: `
      <h2>First-Person Shooter Game Development</h2>
      <p>Developed a first-person shooter demo as part of a team-based game design course.</p>
      
      <h3>Game Systems</h3>
      <ul>
        <li><strong>Player Mechanics:</strong> Implemented first-person camera and movement systems.</li>
        <li><strong>Weapons:</strong> Designed weapon behavior and interactions.</li>
        <li><strong>Enemy AI:</strong> Built basic enemy behaviors and pathfinding.</li>
      </ul>
      
      <h3>Team Coordination</h3>
      <ul>
        <li><strong>Project Planning:</strong> Followed a linear development timeline with defined milestones.</li>
        <li><strong>Collaboration:</strong> Coordinated across programming, art, and design roles.</li>
      </ul>
    `
  }
];

// Function to get project by ID
function getProjectById(id) {
  return projectsData.find(project => project.id === id);
}

// Function to render project cards grouped by category and sorted chronologically
function renderProjectCards(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const groupedProjects = {};
  projectsData.forEach(project => {
    const category = project.category || 'Other Projects';
    if (!groupedProjects[category]) groupedProjects[category] = [];
    groupedProjects[category].push(project);
  });
  
  Object.keys(groupedProjects).forEach(category => {
    groupedProjects[category].sort((a, b) => {
      if (b.sortDate && a.sortDate) return b.sortDate.localeCompare(a.sortDate);
      return 0;
    });
  });
  
  const categoryOrder = ['Rapiscan Systems', 'Academic Projects', 'Other Projects'];
  const sortedCategories = Object.keys(groupedProjects).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
  
  let html = '';
  sortedCategories.forEach(category => {
    html += `<div class="project-category-section">
      <h3 class="project-category-title">${category}</h3>
      <div class="project-card-container">
        ${groupedProjects[category].map(project => {
          let cardClass = 'project-card';
          if (project.isSpecialPage) cardClass = 'project-card special-page';
          if (project.isCompact) cardClass = 'project-card compact-card';
          
          const showImage = !project.isCompact;
          const imageHTML = showImage ? `<img src="${project.image}" class="project-image" alt="${project.title}">` : '';
          
          return `
          <a href="./projects/${project.id}.html" class="project-card-link">
            <div class="${cardClass}">
              ${imageHTML}
              <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="date-text">${project.date}</p>
                <p class="project-description">${project.shortDescription}</p>
                <div class="tag-group">
                  ${project.tags.map((tag, index) => 
                    `<span class="tag ${project.tagClasses[index]}">${tag}</span>`
                  ).join('')}
                </div>
              </div>
            </div>
          </a>
        `;
        }).join('')}
      </div>
    </div>`;
  });
  
  container.innerHTML = html;
}
