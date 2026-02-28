#!/bin/bash
# HLBS Asset Downloader Script

BASE_DIR="HLBSTech_Website_Redesign_Assets"
mkdir -p "$BASE_DIR"/02_Images/{Products,Logos_Branding,Icons_UI}
mkdir -p "$BASE_DIR"/03_PDFs/Datasheets_Brochures

echo "Downloading HLBS Assets..."

# Logos
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/HLBS-Logo.png" -o "$BASE_DIR/02_Images/Logos_Branding/HLBS_Main_Logo.png" && echo "✅ HLBS Logo"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/HINUM-Logo.png" -o "$BASE_DIR/02_Images/Logos_Branding/HINUM_Logo.png" && echo "✅ HINUM Logo"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Make-in-India.png" -o "$BASE_DIR/02_Images/Logos_Branding/Badge_Make_in_India.png" && echo "✅ Make in India"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Intel-Logo.png" -o "$BASE_DIR/02_Images/Logos_Branding/Partner_Intel.png" && echo "✅ Intel"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/AMD-Logo.png" -o "$BASE_DIR/02_Images/Logos_Branding/Partner_AMD.png" && echo "✅ AMD"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Microsoft-Logo.png" -o "$BASE_DIR/02_Images/Logos_Branding/Partner_Microsoft.png" && echo "✅ Microsoft"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/NVIDIA-Logo.png" -o "$BASE_DIR/02_Images/Logos_Branding/Partner_NVIDIA.png" && echo "✅ NVIDIA"

# Products - Workstations
curl -sL "https://hlbstech.com/wp-content/uploads/2025/11/Workstation.png" -o "$BASE_DIR/02_Images/Products/Workstation_CMW1000T_01.png" && echo "✅ Workstation 1"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/10/Workstation.png" -o "$BASE_DIR/02_Images/Products/Workstation_CMW1000T_02.png" && echo "✅ Workstation 2"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/08/Workstation.png" -o "$BASE_DIR/02_Images/Products/Workstation_CMW1000T_03.png" && echo "✅ Workstation 3"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/12/Workstation.png" -o "$BASE_DIR/02_Images/Products/Workstation_CMW1000T_04.png" && echo "✅ Workstation 4"

# Products - Desktop & AIO
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/CM44.jpg" -o "$BASE_DIR/02_Images/Products/Desktop_CM44_01.jpg" && echo "✅ Desktop"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/10/N24.jpg" -o "$BASE_DIR/02_Images/Products/AIO_N24_01.jpg" && echo "✅ AIO"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/N24-AIO-PC.jpg" -o "$BASE_DIR/02_Images/Products/AIO_N24_02.jpg" && echo "✅ AIO 2"

# Products - Mini PC & KIOSK
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Mini-PC.jpg" -o "$BASE_DIR/02_Images/Products/MiniPC_Daksh_01.jpg" && echo "✅ Mini PC"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Kiosk.jpg" -o "$BASE_DIR/02_Images/Products/Kiosk_INFOK_01.jpg" && echo "✅ KIOSK"

# Products - Server
curl -sL "https://hlbstech.com/wp-content/uploads/2025/12/Server.png" -o "$BASE_DIR/02_Images/Products/Server_CMX2000T_01.png" && echo "✅ Server"

# Icons
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Icon-Support.png" -o "$BASE_DIR/02_Images/Icons_UI/Icon_Support.png" && echo "✅ Support Icon"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Icon-Warranty.png" -o "$BASE_DIR/02_Images/Icons_UI/Icon_Warranty.png" && echo "✅ Warranty Icon"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/02/Icon-Quality.png" -o "$BASE_DIR/02_Images/Icons_UI/Icon_Quality.png" && echo "✅ Quality Icon"

# PDFs
curl -sL "https://hlbstech.com/wp-content/uploads/2025/11/DATASHEET.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Workstation_CMW1000T_i7_14700.pdf" && echo "✅ PDF 1"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/10/DATASHEET.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Workstation_CMW1000T_Ultra9_285K.pdf" && echo "✅ PDF 2"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/12/DATASHEET.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Server_CMX2000T_Xeon_Gold.pdf" && echo "✅ PDF 3"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/08/DATASHEET.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Workstation_CMW1000T_Xeon_W9_3475X.pdf" && echo "✅ PDF 4"
curl -sL "https://hlbstech.com/wp-content/uploads/2023/08/DATASHEET-3463443.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Desktop_CM44_Technical_Specs.pdf" && echo "✅ PDF 5"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/01/Intel-Xeon-W3-2435-W790-Nvidia-RTX-A-series-8GB-GFX-Card-Windows-11-Pro-64GB-DDR5-ECC-DVD-RW-USB-Keyboard-Mouse-58-61cm-Monitor.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Workstation_Xeon_W3_2435.pdf" && echo "✅ PDF 6"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/01/HLBS-Workstation-HLBS-CMW100T-Intel-Core-i9-13900-W680-NVIDIA-T1000-8GB-Windows-11-Pro-64GB-DDR5-4800-1TB-SSD-60-71-cm-Non-Touch-Monitor.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Workstation_Core_i9_13900.pdf" && echo "✅ PDF 7"
curl -sL "https://hlbstech.com/wp-content/uploads/2024/10/HLBS-N24-Intel-Core-i5-13500-Q670-16GB-DDR4-Windows-11-Pro.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/AIO_N24_Core_i5_13500.pdf" && echo "✅ PDF 8"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/06/HLBS-All-in-One-PC-6277591.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/AIO_N24_Core_i7_14700.pdf" && echo "✅ PDF 9"
curl -sL "https://hlbstech.com/wp-content/uploads/2025/06/7.-DATASHEET-FORMAT-Brochure.pdf" -o "$BASE_DIR/03_PDFs/Datasheets_Brochures/Workstation_Datasheet_Template.pdf" && echo "✅ PDF 10"

echo ""
echo "✅ All assets downloaded successfully!"
echo "📁 Location: $BASE_DIR/"
