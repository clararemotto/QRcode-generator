import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRGenerator = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');

  const handleGenerateQRCode = () => {
    setQrCodeValue(inputValue);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Gerador de QRcode</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text or URL"
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
          fontSize: '16px',
        }}
      />
      <br />
      <button
        onClick={handleGenerateQRCode}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Gerar QRcode
      </button>

      <div style={{ marginTop: '30px' }}>
        {qrCodeValue && (
          <QRCodeCanvas value={qrCodeValue} size={256} level={'H'} />
        )}
      </div>
    </div>
  );
};

export default QRGenerator;
