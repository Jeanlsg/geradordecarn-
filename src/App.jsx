import React, { useState, useRef } from 'react';
import { Printer, School, Calendar, CreditCard, Layout, Upload, MapPin, Phone, Info } from 'lucide-react';
import logoSemFundo from './assets/logo-sem-fundo.png';

const App = () => {
  const [config, setConfig] = useState({
    schoolName: "ESCOLA RAUL POMPÉIA",
    year: "2026",
    slogan: "Educação de qualidade, compromisso com o futuro.",
    studentName: "",
    guardianName: "",
    enrollment: "",
    // Dados extraídos do PDF original
    pixCpf: "030.226.054-47",
    pixName: "MARIA LUCILENE DE SOUZA GUIMARAES",
    pixBank: "CAIXA ECONÔMICA",
    pixPhone: "(87) 98825-0204",
    dueDate: "01 a 10 de cada mês",
    address: "Rua 12, nº 175 - São Jorge - Petrolina - PE",
    // Configurações de Design
    logoBase64: logoSemFundo,
    primaryColor: "#343a8b", // Azul Escuro
    secondaryColor: "#29abe2", // Azul Claro (Fundo solicitado)
    accentColor: "#ed1c24", // Vermelho
    greenColor: "#8cc63f", // Verde
  });

  const fileInputRef = useRef(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setConfig(prev => ({ ...prev, logoBase64: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Painel lateral (Configurações) */}
      <aside className="w-full md:w-96 bg-white shadow-2xl p-6 print:hidden z-10 overflow-y-auto max-h-screen">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Layout className="text-blue-700" size={24} />
          </div>
          <h1 className="text-xl font-bold text-slate-800">Ajuste de Capas ERP</h1>
        </div>

        <div className="space-y-4 pb-8">
          {/* Logo Upload */}
          <div className="p-4 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50">
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Logotipo da Escola</label>
            <div className="flex items-center gap-3">
              {config.logoBase64 ? (
                <img src={config.logoBase64} alt="Logo" className="h-12 w-12 object-contain rounded border bg-white" />
              ) : (
                <div className="h-12 w-12 flex items-center justify-center bg-white border rounded text-slate-300">
                  <School size={24} />
                </div>
              )}
              <button
                onClick={() => fileInputRef.current.click()}
                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-colors"
              >
                <Upload size={16} /> Alterar Logo
              </button>
              <input type="file" ref={fileInputRef} onChange={handleLogoUpload} className="hidden" accept="image/*" />
            </div>
          </div>

          {/* Dados Escolares */}
          <div className="space-y-3">
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">Nome da Instituição</label>
              <input
                type="text"
                value={config.schoolName}
                onChange={(e) => setConfig({ ...config, schoolName: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">Ano</label>
                <input
                  type="text"
                  value={config.year}
                  onChange={(e) => setConfig({ ...config, year: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none text-center"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">Vencimento</label>
                <input
                  type="text"
                  value={config.dueDate}
                  onChange={(e) => setConfig({ ...config, dueDate: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm outline-none"
                />
              </div>
            </div>
          </div>

          {/* Dados de Pagamento */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
            <h3 className="text-[10px] font-black text-slate-400 uppercase flex items-center gap-2">
              <CreditCard size={12} /> Dados do PIX
            </h3>
            <input
              type="text"
              placeholder="Chave CPF"
              value={config.pixCpf}
              onChange={(e) => setConfig({ ...config, pixCpf: e.target.value })}
              className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs"
            />
            <input
              type="text"
              placeholder="Favorecido"
              value={config.pixName}
              onChange={(e) => setConfig({ ...config, pixName: e.target.value })}
              className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs"
            />
            <input
              type="text"
              placeholder="Telefone p/ Comprovante"
              value={config.pixPhone}
              onChange={(e) => setConfig({ ...config, pixPhone: e.target.value })}
              className="w-full px-2 py-1.5 border border-slate-200 rounded text-xs"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-wider">Endereço (Rodapé)</label>
            <textarea
              value={config.address}
              onChange={(e) => setConfig({ ...config, address: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs outline-none h-16 resize-none"
            />
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="w-full bg-[#343a8b] hover:bg-[#2a2f6e] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95"
        >
          <Printer size={20} /> Imprimir 4 Folhas
        </button>
      </aside>

      {/* Visualização A4 */}
      <main className="flex-1 p-4 md:p-8 bg-slate-200 flex justify-center overflow-y-auto">
        <A4Page config={config} />
      </main>

      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white !important; margin: 0; padding: 0; }
          @page { size: A4 portrait; margin: 0; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>
    </div>
  );
};

const A4Page = ({ config }) => (
  <div className="bg-white w-[210mm] min-h-[297mm] p-[10mm] flex flex-col box-border shadow-2xl print:shadow-none">
    {[1, 2, 3, 4].map((n) => (
      <div
        key={n}
        className="w-full h-[65mm] relative border border-dashed border-slate-400 flex mb-[8mm] last:mb-0 box-border rounded-sm overflow-hidden"
      >
        {/* CONTRACAPA (LADO ESQUERDO) - FUNDO AZUL CLARO */}
        <div
          className="w-1/2 h-full p-4 flex flex-col justify-between relative"
          style={{ backgroundColor: config.secondaryColor }}
        >
          <div className="space-y-3">
            <div>
              <div className="text-[7px] font-black text-white/80 uppercase tracking-widest mb-0.5">Vencimento:</div>
              <div className="text-[10px] font-black text-white bg-[#ed1c24] px-2 py-0.5 rounded shadow-sm inline-block">
                {config.dueDate}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[9px] font-black text-white flex items-center gap-1 border-b border-white/20 pb-1 mb-1">
                <CreditCard size={10} /> PAGAMENTO VIA PIX:
              </div>
              <div className="text-[10px] text-white leading-tight">
                <span className="font-bold opacity-80">CPF:</span> <span className="font-black tracking-wider">{config.pixCpf}</span><br />
                <span className="font-black uppercase text-[9px]">{config.pixName}</span><br />
                <span className="text-[8px] font-bold italic opacity-70">{config.pixBank}</span>
              </div>
            </div>

            <div className="p-2 bg-white/10 rounded-lg border border-white/10 space-y-1">
              <div className="text-[8px] font-black text-white uppercase tracking-tighter">Enviar Comprovante Para:</div>
              <div className="text-sm font-black text-white tracking-tight">{config.pixPhone}</div>
              <p className="text-[7px] font-bold text-white/90 italic leading-none">
                Sem o comprovante suas parcelas continuarão em aberto.
              </p>
            </div>
          </div>

          <div className="text-[8px] text-white font-bold uppercase border-t border-white/20 pt-2 flex items-start gap-1 leading-tight">
            <MapPin size={8} className="mt-0.5 shrink-0" />
            <span>{config.address}</span>
          </div>
        </div>

        {/* CAPA (LADO DIREITO) - FUNDO BRANCO */}
        <div className="w-1/2 h-full p-4 flex flex-col justify-between bg-white relative">

          {/* Cabeçalho Capa */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              {config.logoBase64 ? (
                <img src={config.logoBase64} alt="Logo" className="h-10 w-10 object-contain" />
              ) : (
                <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-300">
                  <School size={20} />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-[10px] font-black italic text-slate-300 leading-none mb-0.5">ERP</span>
                <h2 className="text-[13px] font-black italic leading-none" style={{ color: config.primaryColor }}>
                  {config.schoolName.split(' ').map((word, i) => (
                    <span key={i} style={{ color: (word === 'RAUL' || word === 'POMPÉIA') ? config.greenColor : 'inherit' }} className="mr-1">
                      {word}
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[16px] font-black italic tracking-tighter" style={{ color: config.secondaryColor }}>
                {config.year}
              </div>
            </div>
          </div>

          {/* Título Central */}
          <div className="my-2 text-center">
            <h1 className="text-xl font-black italic uppercase tracking-tighter leading-none" style={{ color: config.primaryColor }}>
              Carnê de <br />
              <span className="text-2xl">Pagamento</span>
            </h1>
          </div>

          {/* Campos Aluno */}
          <div className="space-y-2 border-t pt-2 border-slate-100">
            <div>
              <label className="text-[7px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Aluno(a)</label>
              <div className="w-full border-b border-slate-200 h-5 font-bold italic text-slate-700 text-[11px] px-1">
                {config.studentName}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[7px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Responsável</label>
                <div className="w-full border-b border-slate-200 h-5 font-bold italic text-slate-700 text-[11px] px-1 truncate">
                  {config.guardianName}
                </div>
              </div>
              <div>
                <label className="text-[7px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Contrato</label>
                <div className="w-full border-b border-slate-200 h-5 font-bold italic text-slate-700 text-[11px] px-1 text-center">
                  {config.enrollment}
                </div>
              </div>
            </div>
          </div>

          {/* Slogan Rodapé */}
          <div className="mt-2 text-center">
            <p className="text-[8px] font-black italic opacity-60 uppercase" style={{ color: config.primaryColor }}>
              "{config.slogan}"
            </p>
          </div>
        </div>

        {/* Linha de Dobra Central */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0 border-l border-dashed border-slate-300 z-20"></div>
      </div>
    ))}
  </div>
);

export default App;
