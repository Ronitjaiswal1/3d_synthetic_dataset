# 3D Synthetic Dataset Generation Framework for Deep Learning

**A scalable, automated framework for generating high-quality synthetic 3D volumetric datasets with pixel-perfect annotations for deep learning research.**

> Research Paper | [Code](https://github.com/Ronitjaiswal1/3d_synthetic_dataset) | [Dataset](https://drive.google.com/drive/folders/1yrN9fln7x9DJzyIIU_AoEhxl85g41Jad?usp=drive_link) | Star this repo if you find it useful!

---

## Overview

This repository presents a **fully automated 3D synthetic dataset generation pipeline** designed to create **large-scale volumetric datasets with precise voxel-level ground truth annotations**. The framework addresses critical challenges in 3D deep learning research:

### Challenges with Real-World 3D Data
- Limited availability
- High annotation cost
- Data imbalance
- Privacy concerns
- Poor reproducibility

### Our Solution
**Controlled, scalable, and reproducible data generation**, making it ideal for **training, benchmarking, and evaluating deep learning models** in tasks such as:

- 3D Segmentation  
- 3D Classification  
- Object Detection  
- 3D Reconstruction  
- Robustness & Generalization Studies  

---

## Purpose of the Dataset

Real-world 3D datasets are difficult and expensive to acquire, especially when **precise voxel-level annotations** are required. Manual annotation in 3D is highly time-consuming, error-prone, and costly.

### This framework provides:
- **Automatic pixel-perfect annotations**
- **Scalable dataset synthesis**
- **High structural diversity**
- **Realistic noise & distortion modeling**
- **Controlled experimental reproducibility**

The dataset enables systematic benchmarking of deep learning models and accelerates research in volumetric AI.

---

## Key Contributions

- **Fully automated 3D synthetic data generation pipeline**
- **Parametric shape modeling for high geometric diversity**
- **Multi-stage realistic noise and artifact simulation**
- **Pixel-perfect voxel-level ground truth generation**
- **Scalable dataset synthesis for large-scale training**
- **Multi-task learning support (segmentation, classification, detection)**
- **Cross-model benchmarking and generalization evaluation platform**
- **Modular and extensible framework design**

---

## Proposed Framework

The dataset generation pipeline consists of the following stages:

### 1. **Procedural Geometry Synthesis**
   - Parametric 3D object generation
   - Randomized shapes, sizes, orientations, and spatial placement

### 2. **Stochastic Deformations**
   - Elastic transformations
   - Morphological variability modeling

### 3. **Noise & Imaging Artifact Simulation**
   - Gaussian noise
   - Speckle noise
   - Intensity modulation
   - Spatial smoothing

### 4. **Automated Ground Truth Generation**
   - Dense voxel-level segmentation masks
   - Multi-class labeling

### 5. **Augmentation & Randomization**
   - 3D rotation
   - Scaling
   - Translation
   - Elastic warping

### 6. **Export & Packaging**
   - PyTorch / TensorFlow compatible formats

---

## Dataset Features

| Feature | Description |
|----------|-------------|
| **Data Type** | 3D volumetric synthetic data |
| **Annotation** | Pixel-perfect voxel-level masks |
| **Tasks Supported** | Segmentation, Classification, Detection, Reconstruction |
| **Noise Modeling** | Gaussian, Speckle, Intensity distortions |
| **Augmentation** | Rotation, Scaling, Warping, Translation |
| **Export Formats** | NumPy / PyTorch / TensorFlow tensors |
| **Scalability** | Unlimited synthetic generation |

---

## Repository Structure

```
3d_synthetic_dataset/
┣ 3D_Dataset_Generator.py    # Main dataset generation script
┣ requirements.txt            # Python dependencies
┣ README.md                   # Documentation
┣ outputs/                    # Generated datasets
┣ samples/                    # Sample outputs
┗ visualization/              # Visualization tools
```

---

## Installation

### Prerequisites
- Python 3.7+
- pip package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/Ronitjaiswal1/3d_synthetic_dataset.git

# Navigate to the project directory
cd 3d_synthetic_dataset

# Install dependencies
pip install -r requirements.txt
```

---

## Usage

### Basic Usage

To generate the synthetic dataset, run:

```bash
python 3D_Dataset_Generator.py
```

The generated volumetric samples and corresponding annotation masks will be saved inside the `outputs/` directory.

### Customization

You can customize the generation parameters by modifying the configuration in `3D_Dataset_Generator.py`:

- Number of samples
- Volume dimensions
- Noise levels
- Augmentation parameters
- Object complexity

---

## Experimental Use

This dataset can be directly used for:

- Training 3D convolutional neural networks
- Model benchmarking and evaluation
- Robustness testing under noise and distortions
- Domain generalization experiments
- Ablation and architecture comparison studies

### Suitable Tasks
- **Semantic segmentation**
- **Object detection**
- **Volumetric classification**
- **3D reconstruction**

---

## Benchmarking Models

This dataset is compatible with multiple state-of-the-art deep learning architectures, including:

- **3D U-Net**
- **V-Net**
- **nnU-Net**
- **Swin-UNETR**
- **MONAI-based models**
- **Custom PyTorch and TensorFlow pipelines**

---

## Applications

- **Medical Image Analysis**
- **Biomedical Research**
- **Autonomous Systems**
- **Robotics Perception**
- **Scientific Visualization**
- **3D Scene Understanding**
- **Simulation-based Learning**

---

## Dataset Download

**Pre-generated Dataset**: [Google Drive Link](https://drive.google.com/drive/folders/1yrN9fln7x9DJzyIIU_AoEhxl85g41Jad?usp=drive_link)

The pre-generated dataset includes:
- Training samples
- Validation samples
- Ground truth annotations
- Sample visualizations

---

## Code Repository

**GitHub Repository**: [https://github.com/Ronitjaiswal1/3d_synthetic_dataset](https://github.com/Ronitjaiswal1/3d_synthetic_dataset)

---

## Citation

If you use this dataset or framework in your research, please cite:

```bibtex
@article{verma2026synthetic3d,
  title   = {A Scalable Framework for 3D Synthetic Dataset Generation and Cross-Model Evaluation},
  author  = {Nishant Gupta,Ronit Jaiswal,Radhika Sharma,Harsh Verma,Dr.Sangeeta Yadav},
  journal = {Under Review},
  year    = {2026}
}
```

---

## Authors

- **Harsh Verma** – Faculty of Technology, University of Delhi
- **Ronit Jaiswal** – Faculty of Technology, University of Delhi
- **Nishant Gupta** -  Faculty of Technology, University of Delhi
- **Radhika Sharma** -  Faculty of Technology, University of Delhi
- **Dr. Sangeeta Yadav** - Assistant Professor, Faculty of Technology, University of Delhi

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Disclaimer

This dataset is intended **strictly for research and educational purposes only**. Any commercial usage, redistribution, or derivative work for profit requires prior written permission from the authors.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Contact

For questions, collaborations, or support:

- Open an issue on GitHub
- Reach out to the authors via the University of Delhi

---

## Star This Repository

If you find this work helpful, please consider giving this repository a star to support and encourage further research development!

---

## Acknowledgments

We thank the open-source community and researchers whose tools and frameworks made this work possible.

---

**Made with love for the Deep Learning Research Community**
