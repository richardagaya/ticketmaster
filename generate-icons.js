const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to the SVG logo
const svgLogoPath = path.join(__dirname, 'ticketmaster-logo.svg');

// Generate Ticketmaster app icons
async function generateTicketmasterIcons() {
  // Read the SVG logo file
  const svgLogo = fs.readFileSync(svgLogoPath);

  // Generate app icon sizes
  const iconSizes = {
    'icon.png': 1024,
    'adaptive-icon.png': 1024,
    'favicon.png': 64,
    'splash-icon.png': 200
  };

  // Create the assets/images directory if it doesn't exist
  const imagesDir = path.join(__dirname, 'assets', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Generate each icon size
  for (const [filename, size] of Object.entries(iconSizes)) {
    const outputPath = path.join(imagesDir, filename);
    console.log(`Generating ${outputPath} (${size}x${size})`);
    
    await sharp(svgLogo)
      .resize(size, size)
      .png()
      .toFile(outputPath);
  }

  console.log('All app icons generated successfully!');
}

generateTicketmasterIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
}); 