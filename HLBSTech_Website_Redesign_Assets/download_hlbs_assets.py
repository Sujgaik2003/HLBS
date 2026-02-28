#!/usr/bin/env python3
"""
HLBS Website Asset Downloader
Downloads all images, PDFs, and assets from hlbstech.com
Usage: python download_hlbs_assets.py
"""

import os
import requests
import json
from pathlib import Path
from urllib.parse import urlparse
import time

# Base configuration
BASE_URL = "https://hlbstech.com"
OUTPUT_DIR = "HLBSTech_Website_Redesign_Assets"

# Create directories
dirs = {
    "products": f"{OUTPUT_DIR}/02_Images/Products",
    "logos": f"{OUTPUT_DIR}/02_Images/Logos_Branding", 
    "banners": f"{OUTPUT_DIR}/02_Images/Banners_Hero",
    "icons": f"{OUTPUT_DIR}/02_Images/Icons_UI",
    "pdfs": f"{OUTPUT_DIR}/03_PDFs/Datasheets_Brochures",
    "content": f"{OUTPUT_DIR}/04_Content_Text"
}

for d in dirs.values():
    Path(d).mkdir(parents=True, exist_ok=True)

# Image URLs to download
images = {
    # Logos
    "logos": [
        ("https://hlbstech.com/wp-content/uploads/2024/02/HLBS-Logo.png", "HLBS_Main_Logo.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/HINUM-Logo.png", "HINUM_Logo.png"),
    ],

    # Products - Workstations
    "workstations": [
        ("https://hlbstech.com/wp-content/uploads/2025/11/Workstation.png", "Workstation_CMW1000T_01.png"),
        ("https://hlbstech.com/wp-content/uploads/2025/10/Workstation.png", "Workstation_CMW1000T_02.png"),
        ("https://hlbstech.com/wp-content/uploads/2025/08/Workstation.png", "Workstation_CMW1000T_03.png"),
        ("https://hlbstech.com/wp-content/uploads/2025/12/Workstation.png", "Workstation_CMW1000T_04.png"),
        ("https://hlbstech.com/wp-content/uploads/2025/06/Workstation.png", "Workstation_CMW1000T_05.png"),
    ],

    # Products - Desktops
    "desktops": [
        ("https://hlbstech.com/wp-content/uploads/2024/02/CM44.jpg", "Desktop_CM44_01.jpg"),
        ("https://hlbstech.com/wp-content/uploads/2023/08/CM44.jpg", "Desktop_CM44_02.jpg"),
    ],

    # Products - AIO
    "aio": [
        ("https://hlbstech.com/wp-content/uploads/2024/10/N24.jpg", "AIO_N24_01.jpg"),
        ("https://hlbstech.com/wp-content/uploads/2025/06/N24.jpg", "AIO_N24_02.jpg"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/N24-AIO-PC.jpg", "AIO_N24_03.jpg"),
    ],

    # Products - Mini PC
    "minipc": [
        ("https://hlbstech.com/wp-content/uploads/2024/02/Mini-PC.jpg", "MiniPC_Daksh_01.jpg"),
        ("https://hlbstech.com/wp-content/uploads/2023/08/Mini-PC.jpg", "MiniPC_Daksh_02.jpg"),
    ],

    # Products - KIOSK
    "kiosk": [
        ("https://hlbstech.com/wp-content/uploads/2024/02/Kiosk.jpg", "Kiosk_INFOK_01.jpg"),
        ("https://hlbstech.com/wp-content/uploads/2023/08/Kiosk.jpg", "Kiosk_INFOK_02.jpg"),
    ],

    # Products - Server
    "server": [
        ("https://hlbstech.com/wp-content/uploads/2025/12/Server.png", "Server_CMX2000T_01.png"),
    ],

    # Icons
    "icons": [
        ("https://hlbstech.com/wp-content/uploads/2024/02/Icon-Support.png", "Icon_Support.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/Icon-Warranty.png", "Icon_Warranty.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/Icon-Quality.png", "Icon_Quality.png"),
    ],

    # Certification Badges
    "badges": [
        ("https://hlbstech.com/wp-content/uploads/2024/02/Make-in-India.png", "Badge_Make_in_India.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/ISO-9001.png", "Badge_ISO_9001.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/BIS-Certification.png", "Badge_BIS.png"),
    ],

    # Partner Logos
    "partners": [
        ("https://hlbstech.com/wp-content/uploads/2024/02/Intel-Logo.png", "Partner_Intel.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/AMD-Logo.png", "Partner_AMD.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/Microsoft-Logo.png", "Partner_Microsoft.png"),
        ("https://hlbstech.com/wp-content/uploads/2024/02/NVIDIA-Logo.png", "Partner_NVIDIA.png"),
    ]
}

# PDF URLs
pdfs = [
    ("https://hlbstech.com/wp-content/uploads/2025/11/DATASHEET.pdf", "Workstation_CMW1000T_i7_14700.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2025/10/DATASHEET.pdf", "Workstation_CMW1000T_Ultra9_285K.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2025/12/DATASHEET.pdf", "Server_CMX2000T_Xeon_Gold.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2025/08/DATASHEET.pdf", "Workstation_CMW1000T_Xeon_W9_3475X.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2023/08/DATASHEET-3463443.pdf", "Desktop_CM44_Technical_Specs.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2025/01/Intel-Xeon-W3-2435-W790-Nvidia-RTX-A-series-8GB-GFX-Card-Windows-11-Pro-64GB-DDR5-ECC-DVD-RW-USB-Keyboard-Mouse-58-61cm-Monitor.pdf", "Workstation_Xeon_W3_2435.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2025/01/HLBS-Workstation-HLBS-CMW100T-Intel-Core-i9-13900-W680-NVIDIA-T1000-8GB-Windows-11-Pro-64GB-DDR5-4800-1TB-SSD-60-71-cm-Non-Touch-Monitor.pdf", "Workstation_Core_i9_13900.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2024/10/HLBS-N24-Intel-Core-i5-13500-Q670-16GB-DDR4-Windows-11-Pro.pdf", "AIO_N24_Core_i5_13500.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2025/06/HLBS-All-in-One-PC-6277591.pdf", "AIO_N24_Core_i7_14700.pdf"),
    ("https://hlbstech.com/wp-content/uploads/2025/06/7.-DATASHEET-FORMAT-Brochure.pdf", "Workstation_Datasheet_Template.pdf"),
]

def download_file(url, filepath, timeout=30):
    """Download a single file with error handling"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=timeout, stream=True)

        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            return True, None
        else:
            return False, f"HTTP {response.status_code}"
    except Exception as e:
        return False, str(e)

def main():
    print("=" * 60)
    print("HLBS Website Asset Downloader")
    print("=" * 60)

    total_downloaded = 0
    total_failed = 0

    # Download images
    print("\n📸 Downloading Images...")
    for category, files in images.items():
        print(f"\n  Category: {category}")
        for url, filename in files:
            # Determine folder based on category
            if category == "logos":
                folder = dirs["logos"]
            elif category in ["workstations", "desktops", "aio", "minipc", "kiosk", "server"]:
                folder = dirs["products"]
            elif category == "icons":
                folder = dirs["icons"]
            elif category in ["badges", "partners"]:
                folder = dirs["logos"]
            else:
                folder = dirs["products"]

            filepath = os.path.join(folder, filename)
            success, error = download_file(url, filepath)

            if success:
                print(f"    ✅ {filename}")
                total_downloaded += 1
            else:
                print(f"    ❌ {filename} - {error}")
                total_failed += 1

            time.sleep(0.5)  # Be nice to the server

    # Download PDFs
    print("\n📄 Downloading PDFs...")
    for url, filename in pdfs:
        filepath = os.path.join(dirs["pdfs"], filename)
        success, error = download_file(url, filepath)

        if success:
            print(f"  ✅ {filename}")
            total_downloaded += 1
        else:
            print(f"  ❌ {filename} - {error}")
            total_failed += 1

        time.sleep(0.5)

    # Summary
    print("\n" + "=" * 60)
    print("Download Summary")
    print("=" * 60)
    print(f"✅ Successfully downloaded: {total_downloaded}")
    print(f"❌ Failed: {total_failed}")
    print(f"📁 Output directory: {OUTPUT_DIR}")
    print("\nDone!")

if __name__ == "__main__":
    main()
