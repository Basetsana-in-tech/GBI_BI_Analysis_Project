# GBI Strategic Performance & Market Intelligence Dashboard

A professional web application showcasing Global Bike Inc.'s (GBI) strategic performance and market intelligence through data-driven storytelling. This interactive dashboard presents comprehensive analytics on international distribution, operational efficiency, and strategic recommendations.

![GBI Dashboard Preview](https://github.com/Basetsana-in-tech/GBI_BI_Analysis_Project/blob/main/public/images/Market%20Research.png)

## 🌟 Features

### 📊 Three-Chapter Data Storytelling Narrative

#### Chapter 1: Global Market Composition & Fundamentals
- **Balanced International Footprint**: 52% Germany / 48% USA market distribution
- **Market Research Dashboard**: Comprehensive overview of global market dynamics
- **Geographic Analysis**: Country-level and city-level sales distribution
- **Financial Performance**: Decade-long revenue, cost, and profit trend analysis
- **Key Metric**: Profit Formula - [Revenue] - [Costs] = Profit

#### Chapter 2: Operational Efficiency & The 'Discount Trap'
- **Discount Impact Analysis**: Understanding the relationship between discounting and sales volume
- **Product-Level Insights**: Category-specific discount strategy recommendations
- **Case Study**: Professional Touring Bike margin erosion analysis
- **Strategic Takeaways**: Margin protection vs. volume chasing strategies

#### Chapter 3: Strategic Recommendations & Product Performance
- **Value vs. Volume Framework**: Shifting from revenue-focused to profit-based decision making
- **Product Performance Matrix**: Top 5 products by profit vs. revenue comparison
- **Customer Segmentation**: VIP account identification and management
- **Action Items**: Immediate implementation roadmap for Q3 2024

### 🎨 Design & User Experience
- **Professional Dark Theme**: Emerald/Slate color palette for high-end financial look
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Interactive Visualizations**: Tableau-powered analytics integration
- **Smooth Animations**: Hover effects and transitions for enhanced engagement
- **SEO Optimized**: Meta tags and structured content for search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2.0 (React-based)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **TypeScript**: Full type safety and developer experience
- **Deployment**: GitHub Pages / Vercel ready
- **Version Control**: Git with GitHub

## � Data Files & Resources

This repository includes the complete dataset and Tableau workbook for full data exploration:

### Files Available:
- **`GBI_AnalyticsData.xlsx`** - Complete Excel dataset containing:
  - Sales transactions and revenue data
  - Product performance metrics
  - Geographic distribution data
  - Financial performance indicators
  - Customer segmentation data

- **`GBI_data analysis.twbx`** - Tableau Workbook featuring:
  - All dashboard visualizations used in the web application
  - Interactive charts and graphs
  - Data connections and calculated fields
  - Complete analytical framework

### How to Access:
1. Download the files directly from the repository
2. Open `GBI_data analysis.twbx` in Tableau Desktop for full interactivity
3. Use `GBI_AnalyticsData.xlsx` for custom analysis or integration

## �🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Basetsana-in-tech/GBI_BI_Analysis_Project.git
   cd GBI_BI_Analysis_Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
GBI_BI_Analysis_Project/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── landing/           # Landing page sections
│   │   ├── market-composition.tsx
│   │   ├── discount-analysis.tsx
│   │   ├── strategic-recommendations.tsx
│   │   ├── executive-roadmap.tsx
│   │   └── footer.tsx
│   └── ui/                # Reusable UI components
├── public/                # Static assets
│   └── images/            # Tableau visualizations
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
└── styles/                # Additional styles
```

## 📈 Key Metrics & Insights

| Metric | Value | Significance |
|--------|-------|--------------|
| **Market Distribution** | 52% Germany / 48% USA | Balanced international presence |
| **Peak Sales** | 44,498 units (München) | Urban hub scalability proof |
| **Seasonal Peak** | 15,790 units (June) | Demand forecasting accuracy |
| **Profit Formula** | [Revenue] - [Costs] | Core business equation |

## 🌐 Deployment

### GitHub Pages (Static)
1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` branch and `/root` folder
4. **Live URL**: `https://basetsana-in-tech.github.io/GBI_BI_Analysis_Project`

### Vercel (Recommended)
1. Connect your GitHub account to Vercel
2. Import the `GBI_BI_Analysis_Project` repository
3. Vercel auto-detects Next.js settings
4. **Live URL**: `https://gbi-bi-analysis-project.vercel.app`

## 📊 Data Sources

- **Tableau Analytics**: Primary data visualization platform
- **Internal GBI Systems**: Sales, inventory, and financial data
- **Market Research**: Competitive positioning and opportunity analysis
- **Geographic Data**: City-level and country-level performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary to Global Bike Inc. (GBI) for internal strategic review and analysis.

## 👥 Contact

**Global Bike Inc. (GBI)**
- **Strategic Performance & Market Intelligence**
- **Data Source**: Tableau Analytics
- **Internal Review**: GBI Strategic Planning Team

---

*Built with ❤️ for data-driven strategic decision making at Global Bike Inc.*