# Parametric3D: A Large-Scale Synthetic 3D Dataset

A comprehensive synthetic 3D dataset generated from 20 mathematical parametric surface functions, designed for high-fidelity 3D vision benchmarks, evaluation pipelines, and reproducible research.

## 🌐 Website

Visit the official dataset website: [https://ronitjaiswal1.github.io/3d_synthetic_dataset/](https://ronitjaiswal1.github.io/3d_synthetic_dataset/)

## 📊 Dataset Overview

Parametric3D delivers 99,603+ precisely aligned meshes, renderings, masks, and depth maps from analytically defined surfaces.

### Key Statistics

- **Total Objects**: 99,603+
- **Surface Functions**: 20 mathematical parametric functions
- **Modalities**: 4 per object
  - OBJ mesh
  - RGB image
  - Binary mask
  - Depth map

### Dataset Organization

The dataset is organized into two main collections:

**3D_Dataset_1** (49,604 objects)
- Divided into 6 chunks for distributed access
  - chunk_00: 9,985 objects
  - chunk_01: 10,006 objects
  - chunk_02: 8,829 objects
  - chunk_03: 10,000 objects
  - chunk_04: 10,000 objects
  - chunk_05: 784 objects

**3D_Dataset_2** (49,999 objects)
- Organized by modality
  ```
  3D_Dataset_2/
  ├── obj/
  ├── img/
  ├── mask/
  ├── depth/
  └── manifest.csv
  ```

## 🔬 Dataset Features

| Feature | Description |
|----------|-------------|
| **Data Type** | 3D parametric surface objects |
| **Annotation** | Pixel-perfect depth maps and masks |
| **Ground Truth** | Analytically derived from surface equations |
| **Multi-view** | Orthographic projections (x, y, z axes) |
| **Format** | OBJ, PNG (RGB, Mask, Depth), CSV manifest |
| **Scalability** | Chunked architecture for distributed processing |

## 🎯 Research Applications

Parametric3D is designed for:

- **Monocular Depth Estimation** – Ground-truth depth maps for zero-noise supervision
- **3D Reconstruction** – Aligned multi-modal assets for reconstructing 3D geometry
- **Shape Classification** – Balanced distribution across parametric surface categories
- **Surface Normal Estimation** – Analytical surface definitions enable precise normal computation
- **Domain Adaptation Research** – Synthetic-to-real transfer learning experiments

## 📥 Download

Access the dataset through:
- **Official Website**: [https://ronitjaiswal1.github.io/3d_synthetic_dataset/](https://ronitjaiswal1.github.io/3d_synthetic_dataset/)
- **Google Drive**: [Dataset Folder](https://drive.google.com/drive/folders/1yrN9fln7x9DJzyIIU_AoEhxl85g41Jad?usp=drive_link)

The pre-generated dataset includes:
- Complete OBJ meshes
- RGB renderings
- Binary segmentation masks
- Depth maps
- Metadata and manifests

## 🎓 Credits

**Authors**: Ronit Jaiswal, Nishant Gupta, Harsh Verma, Radhika Sharma  
**Institution**: Faculty of Technology, University of Delhi  
**Supervisor**: Dr. Sangita Yadav

## ⭐ Citation

If you use this dataset in your research, please cite:

```bibtex
@dataset{parametric3d2026,
  title   = {Parametric3D: A Large-Scale Synthetic 3D Dataset Generated from Mathematical Surface Functions},
  author  = {Ronit Jaiswal and Nishant Gupta and Harsh Verma and Radhika Sharma},
  year    = {2026},
  institution = {Faculty of Technology, University of Delhi},
  supervisor = {Dr. Sangita Yadav}
}
```

## 📄 License

This dataset is intended for research and educational purposes. For commercial use, please contact the authors.

## 📧 Contact

For questions, issues, or collaborations:
- Open an issue on this GitHub repository
- Contact the authors through the University of Delhi

---

**Made for the 3D Vision Research Community**
