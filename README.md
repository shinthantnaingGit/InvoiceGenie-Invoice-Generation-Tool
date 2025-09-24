# InvoiceGenie - Invoice Generation Tool

<div align="center">
  <img src="public/invoice.png" alt="InvoiceGenie Logo" width="100" height="100">
  <h3>📄 請求書生成ツール / Invoice Generation Tool</h3>
  <p>A modern, intuitive web application for creating and managing invoices with inventory management capabilities.</p>
  <p>在庫管理機能を備えたモダンで直感的な請求書作成・管理Webアプリケーション。</p>
</div>

---

## 🌟 Features / 機能

### English Features
- **📋 Invoice Creation**: Create professional invoices with itemized billing
- **📦 Inventory Management**: Add, edit, and manage product inventory
- **💰 Real-time Calculations**: Automatic tax calculations (5% tax rate)
- **🎨 Modern UI**: Clean, responsive design with Tailwind CSS
- **🖨️ Print Ready**: Professional invoice printing capabilities
- **📱 Mobile Responsive**: Works seamlessly on all devices
- **⚡ Fast Performance**: Built with Vite for optimal speed

### 日本語機能
- **📋 請求書作成**: 項目別請求書のプロフェッショナルな作成
- **📦 在庫管理**: 商品在庫の追加、編集、管理
- **💰 リアルタイム計算**: 自動税計算（5%税率）
- **🎨 モダンUI**: Tailwind CSSによるクリーンでレスポンシブなデザイン
- **🖨️ 印刷対応**: プロフェッショナルな請求書印刷機能
- **📱 モバイル対応**: すべてのデバイスでシームレスに動作
- **⚡ 高速パフォーマンス**: 最適な速度のためのVite構築

---

## 🚀 Quick Start / クイックスタート

### Prerequisites / 前提条件
- Node.js (v14 or higher)
- npm or yarn

### Installation / インストール

```bash
# Clone the repository
git clone https://github.com/shinthantnaingGit/InvoiceGenie-Invoice-Generation-Tool.git

# Navigate to the project directory
cd InvoiceGenie-Invoice-Generation-Tool

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production / 本番用ビルド

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

---

## 📖 Usage Guide / 使用方法

### English Usage

1. **Adding Products to Inventory**:
   - Click "在庫管理" (Inventory Management) button
   - Add product name and price
   - Click "商品を追加" (Add Product)

2. **Creating an Invoice**:
   - Select a product from the dropdown
   - Enter quantity
   - Click "請求書に追加" (Add to Invoice)

3. **Managing Invoice Items**:
   - View all items in the invoice table
   - Adjust quantities using +/- buttons
   - Remove items using the × button

4. **Printing Invoice**:
   - Review the invoice summary
   - Click "請求書を印刷" (Print Invoice)

### 日本語使用方法

1. **在庫に商品を追加**:
   - 「在庫管理」ボタンをクリック
   - 商品名と価格を入力
   - 「商品を追加」をクリック

2. **請求書の作成**:
   - ドロップダウンから商品を選択
   - 数量を入力
   - 「請求書に追加」をクリック

3. **請求書アイテムの管理**:
   - 請求書テーブルで全アイテムを確認
   - +/-ボタンで数量を調整
   - ×ボタンでアイテムを削除

4. **請求書の印刷**:
   - 請求書サマリーを確認
   - 「請求書を印刷」をクリック

---

## 🛠️ Technology Stack / 技術スタック

### Frontend Technologies
- **HTML5** - Semantic markup
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Modern JavaScript features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite** - Component library
- **Animate.css** - CSS animations
- **SweetAlert2** - Beautiful alerts

### Key Libraries
- **UUID** - Unique identifier generation
- **SweetAlert2** - Enhanced user notifications

---

## 📁 Project Structure / プロジェクト構造

```
InvoiceGenie-Invoice-Generation-Tool/
├── public/
│   ├── bill.png
│   ├── invoice.png
│   ├── money.png
│   └── vite.svg
├── src/
│   ├── handlers.js      # Event handlers
│   ├── initialRender.js # Initial page rendering
│   ├── inventory.js     # Inventory management logic
│   ├── invoice.js       # Main invoice class
│   ├── listener.js      # Event listeners
│   ├── observer.js      # State observer pattern
│   ├── record.js        # Invoice record management
│   ├── selectors.js     # DOM selectors
│   └── state.js         # Application state
├── index.html           # Main HTML file
├── main.js             # Application entry point
├── style.css           # Custom styles
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

---

## 🎯 Key Features Explained / 主要機能の説明

### Inventory Management / 在庫管理
- Add new products with name and price
- Remove existing products with confirmation
- Real-time product list updates
- Persistent product storage

### Invoice Creation / 請求書作成
- Dynamic product selection
- Quantity management with +/- controls
- Real-time total calculations
- Tax calculation (5% rate)
- Professional invoice layout

### User Experience / ユーザー体験
- Smooth animations and transitions
- Responsive design for all screen sizes
- Intuitive Japanese interface
- Confirmation dialogs for destructive actions

---

## 🔧 Development / 開発

### Available Scripts / 利用可能なスクリプト

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Code Organization / コード構成
- **Modular Architecture**: Separated concerns with individual modules
- **Observer Pattern**: State management with reactive updates
- **Template System**: Reusable HTML templates for dynamic content
- **Event-Driven**: Clean event handling and delegation

---

## 🌐 Browser Support / ブラウザサポート

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License / ライセンス

This project is open source and available under the [MIT License](LICENSE).

このプロジェクトはオープンソースで、[MIT License](LICENSE)の下で利用可能です。

---

## 🤝 Contributing / 貢献

Contributions are welcome! Please feel free to submit a Pull Request.

貢献を歓迎します！プルリクエストの提出をお気軽にどうぞ。

---

## 📞 Support / サポート

If you have any questions or need help, please open an issue on GitHub.

ご質問やサポートが必要な場合は、GitHubでissueを作成してください。

---

<div align="center">
  <p>Made with ❤️ by InvoiceGenie Team</p>
  <p>InvoiceGenieチームが❤️を込めて作成</p>
</div>
