import QRCodeGenerator from './components/QRCodeGenerator.jsx';

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <QRCodeGenerator />
    </div>
  );
}
