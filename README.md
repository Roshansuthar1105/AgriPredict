# 🌱 Crop Mantra - AI-Powered Crop Recommendation System

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.8%2B-blue)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.0%2B-lightgrey)](https://flask.palletsprojects.com/)

**Smart agriculture solution that recommends optimal crops based on soil, weather, and environmental factors.**

---

## 📌 Table of Contents
- [Problem Statement](#problem-statement)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Dataset](#-dataset)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## Problem Statement
Indian agriculture faces critical challenges:
- 70% of farmers rely on traditional knowledge for crop selection
- Climate change causing unpredictable yields
- Soil degradation due to improper crop rotation

Crop Mantra solves this using **machine learning** to recommend crops with highest yield probability.

---

## ✨ Features
- 🌦️ **Climate-adaptive recommendations**
- 🌱 **Soil health optimization**
- 📊 **Data-driven insights**
- 📱 **Web & mobile responsive**
- 🚀 **Low-latency predictions** (<500ms)

---

## 🛠️ Tech Stack
| Component       | Technology |
|-----------------|------------|
| **Frontend**    | HTML5, CSS3, JavaScript |
| **Backend**     | Python Flask |
| **ML Model**    | Random Forest (scikit-learn) |
| **Deployment**  | Heroku/Render |

---

## 📂 Dataset
Uses [Kaggle's Crop Recommendation Dataset](https://www.kaggle.com/datasets/atharvaingle/crop-recommendation-dataset) with:
- 2200+ samples
- 7 parameters (N,P,K,temp,humidity,ph,rainfall)
- 22 crop types

---

## ⚙️ Installation
```bash
# Clone repository
git clone https://github.com/yourusername/crop-mantra.git
cd crop-mantra

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt