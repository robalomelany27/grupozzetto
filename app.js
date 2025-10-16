    // ========= Config =========
    const WHATSAPP_TEL = '5491127870031';

    // Año del footer + CTA
    document.getElementById('y').textContent = new Date().getFullYear();
    document.getElementById('cta-wa').href = `https://wa.me/${WHATSAPP_TEL}?text=${encodeURIComponent('Hola GRUPOZZETTO, quiero asesoramiento.')}`;


    const DOCS = {
  'Acoplado Barandas Volcables – 3 ejes': 'https://drive.google.com/open?id=1WVfkJ8edEyDJ5cwegdaGUUJF4Z9_qq_C',
  'Acoplado Barandas Volcables – 4 ejes': 'https://drive.google.com/open?id=1FfRW1xWhFpZmaZf2UMWioRPYPer6YUZs',
  'Acoplado Todo Puertas – 3 ejes': 'https://drive.google.com/open?id=13-fbq_g3OPO6u8D2dQGJrZzGClVVf8_B',
  'Acoplado Todo Puertas – 4 ejes': 'https://drive.google.com/open?id=1UNf4v5um0Cz7_3h8wO-7TF3CrKFYR4dq',
  'Bitren Barandas Volcables PBTC 60T': 'https://drive.google.com/open?id=1Qk1MNYx31wAY6NdaAOKbdz8ULKH9oy6M',
  'Bitren Barandas Volcables PBTC 75T': 'https://drive.google.com/open?id=1oZV1kAdUuMF2jMgCq0WpyCAmNtpVGRxF',
  'Bitren Tolva Cerealera PBTC 60T': 'https://drive.google.com/open?id=1NQdDOVHr0LEB-6wvwKQabgXltnEvdU5X',
  'Bitren Tolva Cerealera PBTC 75T': 'https://drive.google.com/open?id=1U8dMQWTmvkgyRy1yACBctKpRhnRCKHYf',
  'Semirremolque Barandas Volcables': 'https://drive.google.com/open?id=1m4qglfGv9zWbmlUTGQ0eWhQKohEoYNEF',
  'Semirremolque Tipo Batea – PBTC 55.5T': 'https://drive.google.com/open?id=1dAAQvqX9J0ozb1eYw2_lboRt0O3ghwrR',
  'Semirremolque Tolva – PBTC 55.5T': 'https://drive.google.com/open?id=1sjC5e5E0jRDrmSD7rxk_YmZhIgwQXRRq',
  'Semirremolque de Vuelco Trasero Tipo Batea 27m3': 'https://drive.google.com/open?id=1v08hTQJe7frSpCE7KklFg_LeS3ld7QDc',
  'Semirremolque de Vuelco Trasero Tipo Batea 40m3': 'https://drive.google.com/open?id=1Vvf9H2e2fYPOhVDP8TRThgLw6vA1oIXd',
  'Semirremolque modelo Curtain Sider (laterales de lona)': 'https://drive.google.com/open?id=1G5o3vMtGJjTqLaZC9gXUKWk5FSbH8pMZ',
  'Tolva Autodescargable CRV 35': 'https://drive.google.com/open?id=1Gi52d3zPwPYDaTz0mDl4VZ3DNDbfIYUB',
  'Tolva Autodescargable CRV 26': 'https://drive.google.com/open?id=1O2lG-f6YpiPE7sFbECdWsvyxuOfO6O84',
  'Tolva Autodescargable CRV 22': 'https://drive.google.com/open?id=1yqz0vBMLNfDqphIR6YlZRRxHqA29mKQd',
  'Tolva Autodescargable CRV 15': 'https://drive.google.com/open?id=1fZc2fDloq5-fOKjiyT-azJKUQ_WbkS0p',
  'Tolva Autodescargable ATA 26': 'https://drive.google.com/open?id=1g3Q9IXP9-AU4bMTeR4AEbquNZYx8zA5t',
  'Tolva Autodescargable ATA 22': 'https://drive.google.com/open?id=1cnp-BpU_rHDe4sbnAPlz0MWYlAVZgLzo',
  'Tolva Autodescargable ATA 16.5': 'https://drive.google.com/open?id=1mSeT8JfW6hCAXT7HL9L7mO3nEhPbcKCs',
  'Tolva Autodescargable ATA 14': 'https://drive.google.com/open?id=1Nq4cOE5cITcCpvZQxZQyCeDk7MHHUgkp',
  'Desmalezadora Hileradora DHO 3200': 'https://drive.google.com/open?id=1QenSxV9XqqwWb_tDJ1JdH2T1hngGOKdt',
  'Cabezal Maicero Universal': 'https://drive.google.com/open?id=1JUShvO2Xz9c5XoIBv5dcX1B02oI27f8V'
};
    // ====== IMÁGENES provistas (clave: título del ítem) ======
    const IMG = {
      'Cabezal Maicero Universal': 'https://i.postimg.cc/s27Pgx47/Cabezal-Maicero-Universal.png',
      'Acoplado Barandas Volcables - 3 ejes': 'https://i.postimg.cc/jCN8H7Cr/Acoplado-Barandas-Volcables-3-ejes.jpg',
      'Acoplado Barandas Volcables - 4 ejes': 'https://i.postimg.cc/kBmTfgty/Acoplado-Barandas-Volcables-4-ejes.png',
      'Acoplado Todo Puertas - 3 ejes': 'https://i.postimg.cc/hhxCLdhW/Acoplado-Todo-Puertas-3-ejes.jpg',
      'Acoplado Tolva Cerealera - 3 ejes': 'https://i.postimg.cc/K4L9PM4b/Acoplado-Tolva-Cerealera-3-ejes.jpg',
      'Acoplado Tolva Cerealera - 4 ejes': 'https://i.postimg.cc/G9YMFy92/Acoplado-Tolva-Cerealera-4-ejes.png',
      'Acoplado Volcador Bilateral - 3 ejes': 'https://i.postimg.cc/yW9fmZWx/Acoplado-Volcador-Bilateral-3-ejes.jpg',
      'Acoplado Todo Puertas - 4 ejes': 'https://i.postimg.cc/Vd8KDkbC/acoplado-ombu-4-ejes-todo-puertas-producto.jpg',
      'Bitren Barandas Volcables PBTC 60T': 'https://i.postimg.cc/kBmTfgtQ/Bitren-Barandas-Volcables-PBTC-60-T.jpg',
      'Bitren Barandas Volcables PBTC 75T': 'https://i.postimg.cc/SJhgDxzr/Bitren-Barandas-Volcables-PBTC-75-T.jpg',
      'Bitren Tolva Cerealera PBTC 60T': 'https://i.postimg.cc/rKkfQwtY/Bitren-Tolva-Cerealera-PBTC-60-T.jpg',
      'Bitren Tolva Cerealera PBTC 75T': 'https://i.postimg.cc/Tp6tC3Ws/Bitren-Tolva-Cerealera-PBTC-75-T.jpg',
      'Bitren Volcador Bilateral PBTC 75T': 'https://i.postimg.cc/4mQBMRz5/Bitren-Volcador-Bilateral-PBTC-75-T.jpg',
      'CABEZAL MAICERO CM 2020': 'https://i.postimg.cc/xc3t7VKs/CABEZAL-MAICERO-CM-2020.jpg',
      'Caja volcadora 18m³': 'https://i.postimg.cc/0b0c31pB/Caja-volcadora-18m3.jpg',
      'Caja Volcadora Trasera Minera': 'https://i.postimg.cc/RNLX8x7r/Caja-Volcadora-Trasera-Minera.jpg',
      'Caja volcadora trasera - 10m³': 'https://i.postimg.cc/4mQBMRzj/Caja-volcadora-trasera-10m3.jpg',
      'Carrocería Barandas Volcables': 'https://i.postimg.cc/GHxqNnF1/Carroceri-a-Barandas-Volcables.jpg',
      'Carrocería Tolva': 'https://i.postimg.cc/jL4Z9YHR/Carroceri-a-Tolva.jpg',
      'Compactador de residuos de carga lateral': 'https://i.postimg.cc/8jmt3gR5/Compactador-de-residuos-de-carga-lateral.jpg',
      'Compactador de residuos de carga bilateral': 'https://i.postimg.cc/7fnmcr3Z/Compactador-de-residuos-de-carga-bilateral.jpg',
      'Compactadores de residuos CR 16 - CR 18 - CR 21': 'https://i.postimg.cc/cv1XGkhN/Compactadores-de-residuos-CR-16-CR-18-CR-21.jpg',
      'Desmalezadora – Hileradora DHO 3000': 'https://i.postimg.cc/QFN0ZYmX/Desmalezadora-Hileradora-DHO-3000.jpg',
      'Desmalezadora – Hileradora DHO 3200': 'https://i.postimg.cc/gxM4zyts/Desmalezadora-Hileradora-DHO-3200.png',
      'Equipo Full Trailer': 'https://i.postimg.cc/LJ4NFQDg/Equipo-Full-Trailer.jpg',
      'Extractora de granos EH 400': 'https://i.postimg.cc/9DXJHgbT/Extractora-de-granos-EH-400.jpg',
      'Extractora de granos EMCO 2002': 'https://i.postimg.cc/VJsDPZgb/Extractora-de-granos-EMCO-2002.jpg',
      'Extractora de granos hidropropulsada EHO': 'https://i.postimg.cc/PC6KXbVM/Extractora-de-granos-hidropropulsada-EHO.png',
      'Fertilizadora Autopropulsada F 5000': 'https://i.postimg.cc/k2jwJNYf/Fertilizadora-Autopropulsada-F-5000.png',
      'Fertilizadora Autopropulsada Neumática FN 4200': 'https://i.postimg.cc/9Dx1mPg7/Fertilizadora-Autopropulsada-Neuma-tica-FN-4200.png',
      'Pulverizadora Autopropulsada PAO 3500': 'https://i.postimg.cc/18WMm07G/Pulverizadora-Autopropulsada-PAO-3500.jpg',
      'Rastra Acondicionadora RAO': 'https://i.postimg.cc/R3NdN3jS/Rastra-Acondicionadora-RAO.png',
      'Rastra de discos articulada ROP 5900': 'https://i.postimg.cc/Xr2xjKDS/Rastra-de-discos-articulada-ROP-5900.jpg',
      'Rastra de discos de tiro excéntrico ROE 1500': 'https://i.postimg.cc/3kL98jfP/Rastra-de-discos-de-tiro-exce-ntrico-ROE-1500.jpg',
      'Rastra de discos desencontrada ROP 4900': 'https://i.postimg.cc/cKrhrKPj/Rastra-de-discos-desencontrada-ROP-4900.jpg',
      'Semirremolque Barandas Volcables': 'https://i.postimg.cc/B8XpX8Rd/Semirremolque-Barandas-Volcables.jpg',
      'Semirremolque barandas volcables | 1+1+1 | PBTC 55.5T': 'https://i.postimg.cc/yJkjkJ22/Semirremolque-barandas-volcables-1-1-1-PBTC-55-5-T.jpg',
      'Semirremolque de vuelco trasero Tipo Batea 27m3': 'https://i.postimg.cc/WDh8hDQL/Semirremolque-de-vuelco-trasero-Tipo-Batea-27m3.jpg',
      'Semirremolque de Vuelco Trasero Tipo Batea 40m3': 'https://i.postimg.cc/cKrhrKVZ/Semirremolque-de-Vuelco-Trasero-Tipo-Batea-40m3.jpg',
      'Semirremolque modelo Curtain Sider': 'https://i.postimg.cc/nsC2Cs6r/Semirremolque-modelo-Curtain-Sider-laterales-de-lona.jpg',
      'Semirremolque Porta – contenedores': 'https://i.postimg.cc/Typ0pyZ3/Semirremolque-Porta-contenedores.jpg',
      'Semirremolque Tipo Batea | PBTC 55.5T': 'https://i.postimg.cc/PLPyPLBP/Semirremolque-Tipo-Batea-PBTC-55-5-T.jpg',
      'Semirremolque tolva 1 + 1 + 1 | PBTC 55.5T': 'https://i.postimg.cc/PLPyPLBC/Semirremolque-tolva-1-1-1-PBTC-55-5-T.jpg',
      'Semirremolque Tolva 54m3': 'https://i.postimg.cc/xkc5ckWJ/Semirremolque-Tolva-54m3.jpg',
      'Semirremolque Volcador Bilateral Escalable': 'https://i.postimg.cc/B8XpX8dP/Semirremolque-Volcador-Bilateral-Escalable.jpg',
      'Tolva Autodescargable ATA 14': 'https://i.postimg.cc/jWmXNxbd/Tolva-Autodescargable-ATA-14.jpg',
      'Tolva Autodescargable ATA 16.5': 'https://i.postimg.cc/Z92c3bSn/Tolva-Autodescargable-ATA-16-5.jpg',
      'Tolva Autodescargable ATA 22': 'https://i.postimg.cc/gwQDRzWr/Tolva-Autodescargable-ATA-22.jpg',
      'Tolva Autodescargable ATA 26': 'https://i.postimg.cc/gwQDRzWr/Tolva-Autodescargable-ATA-22.jpg',
      'Tolva Autodescargable CRV 15': 'https://i.postimg.cc/McNDR6Sj/Tolva-Autodescargable-CRV-15.jpg',
      'Tolva Autodescargable CRV 22': 'https://i.postimg.cc/3yVBp8TC/Tolva-Autodescargable-CRV-22.jpg',
      'Tolva Autodescargable CRV 26': 'https://i.postimg.cc/t1w5Pqj3/Tolva-Autodescargable-CRV-26.jpg',
      'Tolva Autodescargable CRV 35': 'https://i.postimg.cc/RqcR6xb9/Tolva-autodescargable-CRV-35.png',
      'Tolva fertilizante/semillas TFSO 13': 'https://i.postimg.cc/7f9n9M4b/Tolva-para-fertilizante-y-semillas-TFSO-13.png',
      'Tolva fertilizante/semillas TFSO 24': 'https://i.postimg.cc/0MSC0TkH/Tolva-para-fertilizante-y-semillas-TFSO-24.jpg',
       '898': 'https://i.postimg.cc/XYD7hgMN/Acoplado-Barandas-Volcables-9-30m-INT-898-30-en-10-cheques-0-9.jpg',
      '912': 'https://i.postimg.cc/K8svV5Xv/Acoplado-Palletero-INT-912.jpg',
      '824': 'https://i.postimg.cc/mg62qSxR/acoplado-usado-cerealero-int-824-300x300.jpg',
      '810': 'https://i.postimg.cc/cL54jcqd/acoplado-usado-ombu-cerealero-int-810-300x300.jpg',
       '626': 'https://i.postimg.cc/W4YVtpp4/Cabezal-maicero-Usado-13-surcos-a-52cm-INT-626.jpg',
      '644': 'https://i.postimg.cc/mg62qSxt/Cabezal-maicero-Usado-12-surcos-a-52cm-INT-644.jpg',
      '624': 'https://i.postimg.cc/BnwQyCWt/cabezal-maicero-Usado-13-surcos-a-52cm-INT-624.jpg',
      '629': 'https://i.postimg.cc/52kNGmcX/Cabezal-maicero-Usado-13-surcos-a-52cm-INT-629.jpg',
      '641': 'https://i.postimg.cc/bwFNMRXG/Cabezal-maicero-Usado-13-surcos-a-52cm-INT-641.jpg',
      '68' : 'https://i.postimg.cc/Jzd4gQwh/Cabezal-maicero-Usado-13-surcos-a-52cm-INT-68.jpg',
      '612': 'https://i.postimg.cc/FHnsqxtJ/Cabezal-maicero-Usado-14-surcos-a-52cm-INT-612.jpg',
      '616': 'https://i.postimg.cc/K8svV5XB/Cabezal-maicero-Usado-14-surcos-a-52cm-INT-616.jpg',
      '642': 'https://i.postimg.cc/0yH23Cg7/Cabezal-maicero-Usado-14-surcos-a-52cm-INT-642.jpg',
      '643': 'https://i.postimg.cc/13Y5TKxG/Cabezal-maicero-Usado-14-surcos-a-52cm-INT-643.jpg',
      '620': 'https://i.postimg.cc/g2Bk5K9q/Cabezal-maicero-Usado-16-surcos-a-52cm-INT-620.jpg',
      '635': 'https://i.postimg.cc/k56Xdt9b/Cabezal-maicero-Usado-16-surcos-a-52cm-INT-635.jpg',
      '637': 'https://i.postimg.cc/BvLQG1sP/Cabezal-maicero-Usado-16-surcos-a-52cm-INT-637.jpg',
      '625': 'https://i.postimg.cc/LsY6MZRL/Cabezal-maicero-Usado-18-surcos-a-52cm-INT-625.jpg',
      '636': 'https://i.postimg.cc/9fRFjqVP/Cabezal-maicero-Usado-18-surcos-a-52cm-INT-636.jpg',
      '646': 'https://i.postimg.cc/5tYNMF1S/Cabezal-maicero-Usado-18-surcos-a-52cm-INT-646.jpg',
      '645': 'https://i.postimg.cc/pdhXtnxY/Cabezal-maicero-Usado-22-surcos-a-42cm-INT-645.jpg',
      '906': 'https://i.postimg.cc/wByTdsHk/Extractora-de-grano-EH-400-Usada-INT-906.jpg',
      '908': 'https://i.postimg.cc/1zn5ZNPC/Extractora-de-grano-EHO-Usada-INT-908.jpg',
      '287': 'https://i.postimg.cc/9fRFjqVk/Semirremolque-Barandas-Volcables-INT-287.jpg',
      '1231': 'https://i.postimg.cc/YS522qqT/Tolva-autodescargable-16-T-INT-1231.jpg',
      '1236': 'https://i.postimg.cc/q7PBBMvV/Tolva-autodescargable-20-T-INT-1236.jpg',
      '1238': 'https://i.postimg.cc/q7hMdC0Y/Tolva-autodescargable-INT-1238.jpg',
      '1253': 'https://i.postimg.cc/jjwdrJKB/Tolva-autodescargable-INT-1253.jpg',
      '1266': 'https://i.postimg.cc/ZqBKhy4h/Tolva-autodescargable-INT-1266.jpg',
      '1269': 'https://i.postimg.cc/q7PBBMMb/Tolva-autodescargable-INT-1269.jpg'
    };

    // Placeholder: Logo OMBU para productos sin imagen
    const PH = 'https://i.postimg.cc/9z9HS0gP/Picsart-25-09-30-12-04-56-999.png';

    // ======= DATA Catálogos =======
    const nuevos = [
      {t:'Acoplado Barandas Volcables - 3 ejes', cat:'semisN'},
      {t:'Acoplado Barandas Volcables - 4 ejes', cat:'semisN'},
      {t:'Acoplado Todo Puertas - 3 ejes', cat:'semisN'},
      {t:'Acoplado Todo Puertas - 4 ejes', cat:'semisN'},
      {t:'Acoplado Tolva Cerealera - 3 ejes', cat:'semisN'},
      {t:'Acoplado Tolva Cerealera - 4 ejes', cat:'semisN'},
      {t:'Acoplado Volcador Bilateral - 3 ejes', cat:'semisN'},
      // {t:'Barandas Volcables', cat:'semisN'},
      {t:'Bitren Barandas Volcables PBTC 60T', cat:'semisN'},
      {t:'Bitren Barandas Volcables PBTC 75T', cat:'semisN'},
      {t:'Bitren Tolva Cerealera PBTC 60T', cat:'semisN'},
      {t:'Bitren Tolva Cerealera PBTC 75T', cat:'semisN'},
      {t:'Bitren Volcador Bilateral PBTC 75T', cat:'semisN'},
      {t:'Cabezal Girasolero CG 2010', cat:'cabezalesN'},
      {t:'CABEZAL MAICERO CM 2020', cat:'cabezalesN'},
      {t:'Cabezal Maicero Universal', cat:'cabezalesN'},
      {t:'Caja volcadora 18m³', cat:'semisN'},
      {t:'Caja volcadora trasera - 10m³', cat:'semisN'},
      {t:'Caja Volcadora Trasera Minera', cat:'semisN'},
      {t:'Carrocería Barandas Volcables', cat:'semisN'},
      {t:'Carrocería Tolva', cat:'semisN'},
      {t:'Compactador de residuos de carga lateral', cat:'otrosN'},
      {t:'Compactadores de residuos CR 16 - CR 18 - CR 21', cat:'otrosN'},
      {t:'Desmalezadora – Hileradora DHO 3000', cat:'otrosN'},
      {t:'Embolsadora de granos secos EGSO 550', cat:'otrosN'},
      {t:'Equipo Full Trailer', cat:'semisN'},
      {t:'Semirremolque Curtain Sider', cat:'semisN'},
      {t:'Semirremolque Batea 27 m³', cat:'semisN'},
      {t:'Semirremolque Batea 40 m³', cat:'semisN'},
      {t:'Tolva Autodescargable ATA 14', cat:'tolvasN'},
      {t:'Tolva Autodescargable ATA 16.5', cat:'tolvasN'},
      {t:'Tolva Autodescargable ATA 22', cat:'tolvasN'},
      {t:'Tolva Autodescargable ATA 26', cat:'tolvasN'},
      {t:'Tolva Autodescargable CRV 15', cat:'tolvasN'},
      {t:'Tolva Autodescargable CRV 22', cat:'tolvasN'},
      {t:'Tolva Autodescargable CRV 26', cat:'tolvasN'},
      {t:'Tolva Autodescargable CRV 35', cat:'tolvasN'},
      {t:'Tolva fertilizante/semillas TFSO 13', cat:'tolvasN'},
      {t:'Tolva fertilizante/semillas TFSO 24', cat:'tolvasN'}
    ];

    const usados = [
      {t:'Cabezal maicero Usado — 12 surcos a 52cm — INT 644'},
      {t:'Cabezal maicero Usado — 13 surcos a 52cm — INT 624'},
      {t:'Cabezal maicero Usado — 13 surcos a 52cm — INT 626'},
      {t:'Cabezal maicero Usado — 13 surcos a 52cm — INT 629'},
      {t:'Cabezal maicero Usado — 13 surcos a 52cm — INT 641'},
      {t:'Cabezal maicero Usado — 13 surcos a 52cm — INT 68'},
      {t:'Cabezal maicero Usado — 14 surcos a 52cm — INT 612'},
      {t:'Cabezal maicero Usado — 14 surcos a 52cm — INT 616'},
      {t:'Cabezal maicero Usado — 14 surcos a 52cm — INT 642'},
      {t:'Cabezal maicero Usado — 14 surcos a 52cm — INT 643'},
      {t:'Cabezal maicero Usado — 16 surcos a 52cm — INT 620'},
      {t:'Cabezal maicero Usado — 16 surcos a 52cm — INT 635'},
      {t:'Cabezal maicero Usado — 16 surcos a 52cm — INT 637'},
      {t:'Cabezal maicero Usado — 18 surcos a 52cm — INT 625'},
      {t:'Cabezal maicero Usado — 18 surcos a 52cm — INT 636'},
      {t:'Cabezal maicero Usado — 18 surcos a 52cm — INT 646'},
      {t:'Cabezal maicero Usado — 22 surcos a 42cm — INT 645'},
      {t:'Tolva autodescargable 20T — INT 1236'},
      {t:'Tolva autodescargable — INT 1238'}
    ];

    const gridN = document.getElementById('gridNuevos');
    const gridU = document.getElementById('gridUsados');

    function imgFor(title){
      const m = title.match(/INT\s+(\d+)/i);
      if (m && IMG[m[1]]) {
        const src = IMG[m[1]];
        return { src, full: src };
      }
      const srcTitle = IMG[title];
      if (srcTitle) return { src: srcTitle, full: srcTitle };
      return { src: PH, full: PH };
    }

// --- función que busca coincidencias entre título y DOCS ---
function docLinkFor(title) {
  if (!DOCS) return null;
  const clean = (s = '') =>
    s.toLowerCase()
     .normalize('NFD')
     .replace(/[\u0300-\u036f]/g,'') // quita acentos
     .replace(/[^a-z0-9]+/g,' ')     // deja alfanumérico
     .trim();

  const t = clean(title);
  for (const [k, v] of Object.entries(DOCS)) {
    const nk = clean(k);
    if (nk === t || t.includes(nk) || nk.includes(t)) return v;
  }
  return null;
}

    // === TARJETA NUEVOS ===
    function cardNuevo(title, cat='') {
      const {src, full} = imgFor(title);
      const docUrl = docLinkFor(title);
      const waBase = `https://wa.me/${WHATSAPP_TEL}`;
      const waConsulta = `${waBase}?text=${encodeURIComponent('Hola, tengo una consulta sobre: '+title)}`;
      const waFolletos = `${waBase}?text=${encodeURIComponent('Hola, quiero el folleto de: '+title)}`;

      const botonFolleto = docUrl
        ? `<a class="btn btn-red text-sm w-full mt-2" href="${docUrl}" target="_blank" rel="noopener">📄 Ver folleto</a>`
        : `<a class="btn btn-ghost text-sm w-full mt-2" href="${waFolletos}" target="_blank" rel="noopener">📩 Pedir folleto</a>`;

      const botonWhatsApp = `
        <a class="btn btn-ghost text-sm w-full mt-2 flex items-center justify-center gap-2"
          href="${waConsulta}" target="_blank" rel="noopener">
          💬 Consultar por WhatsApp
        </a>`;

      return `
      <article class="relative bg-white rounded-xl shadow-soft overflow-hidden group" ${cat?`data-cat="${cat}"`:''}>
        <span class="badge badge-nuevo">NUEVO</span>
        <div class="aspect-[4/3] bg-brand.silver/40">
          <img
            src="${src}"
            alt="${title}"
            class="w-full h-full object-cover cursor-zoom-in"
            loading="lazy" decoding="async"
            data-full="${full}">
        </div>
        <div class="p-4">
          <h3 class="font-medium group-hover:text-brand-red transition">${title}</h3>
          ${botonFolleto}
          ${botonWhatsApp}
        </div>
      </article>`;
}
    

    function cardUsado(title) {
      const {src, full} = imgFor(title);
      return `
      <article class="relative bg-white rounded-xl shadow-soft overflow-hidden group">
        <span class="badge badge-usado">USADO</span>
        <div class="aspect-[4/3] bg-brand.silver/40">
          <img
            src="${src}"
            alt="${title}"
            class="w-full h-full object-cover cursor-zoom-in"
            loading="lazy" decoding="async"
            data-full="${full}">
        </div>
        <div class="p-4"><h3 class="font-medium group-hover:text-brand-red transition">${title}</h3></div>
      </article>`;
    }

    // ---- Paginador genérico por grid ----
    function makePager(data, pageSize, renderFn, grid, infoEl, prevBtn, nextBtn) {
      let page = 1;
      const totalPages = Math.max(1, Math.ceil(data.length / pageSize));
      function draw() {
        const start = (page-1)*pageSize;
        const slice = data.slice(start, start + pageSize);
        grid.innerHTML = slice.map(renderFn).join('');
        infoEl.textContent = `Página ${page} de ${totalPages}`;
        prevBtn.disabled = page===1;
        nextBtn.disabled = page===totalPages;
      }
      prevBtn.addEventListener('click', ()=>{ if(page>1){ page--; draw(); }});
      nextBtn.addEventListener('click', ()=>{ if(page<totalPages){ page++; draw(); }});
      draw();
      return {go:(p)=>{page=Math.min(totalPages,Math.max(1,p));draw();}};
    }

    // ====== Render con paginación independiente ======
    const pagerN = makePager(nuevos, 10, p => cardNuevo(p.t, p.cat), gridN,
      document.getElementById('infoN'), document.getElementById('prevN'), document.getElementById('nextN'));
    const pagerU = makePager(usados, 10, p => cardUsado(p.t), gridU,
      document.getElementById('infoU'), document.getElementById('prevU'), document.getElementById('nextU'));

    // ====== WhatsApp contacto general ======
    function val(id){return (document.getElementById(id)?.value||'').trim()}
    function sendFormWA(e){
      e.preventDefault();
      const txt = [
        '*Consulta desde la web*',
        `Nombre: ${val('f-nombre')} ${val('f-apellido')}`,
        `Email: ${val('f-email')} · Tel: ${val('f-tel')}`,
        `Provincia/Localidad: ${val('f-prov')} / ${val('f-loc')}`,
        `Mensaje: ${val('f-msj') || '(sin detalle)'}`
      ].join('%0A');
      window.open(`https://wa.me/${WHATSAPP_TEL}?text=${txt}`,'_blank');
      return false;
    }
    
    function sendPlanWA(e) {
      if (e) e.preventDefault();
      const nombre = val('p-nombre');
      const apellido = val('p-apellido');
      const email = val('p-email');
      const telefono = val('p-tel');
      if (!nombre || !apellido || !email || !telefono) {
        alert('Por favor completá todos los campos obligatorios (Nombre, Apellido, Email y Teléfono)');
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Por favor ingresá un email válido');
        return false;
      }
      const vbm = document.getElementById('p-vbm')?.value || '40000000';
      const vbmFormatted = parseInt(vbm).toLocaleString('es-AR', {
        style: 'currency', 
        currency: 'ARS', 
        maximumFractionDigits: 0
      });
      const txt = [
        '*Pre-suscripción Plan de Ahorro OMBU*',
        `👤 Nombre: ${nombre} ${apellido}`,
        `📧 Email: ${email}`,
        `📱 Teléfono: ${telefono}`,
        `📍 Provincia/Localidad: ${val('p-prov')} / ${val('p-loc')}`,
        `🆔 DNI/CUIT: ${val('p-dni') || 'No especificado'}`,
        `💰 Valor Básico Móvil: ${vbmFormatted}`,
        `📝 Comentarios: ${val('p-msj') || 'Quiero información del Plan de Ahorro'}`
      ].join('%0A%0A');
      const waUrl = `https://wa.me/${WHATSAPP_TEL}?text=${txt}`;
      try {
        window.location.href = waUrl;
        setTimeout(() => {
          const modal = document.getElementById('dlg-plan');
          if (modal) modal.close();
        }, 1000);
      } catch (error) {
        console.error('Error al abrir WhatsApp:', error);
        const txtPlain = txt.replace(/%0A/g, '\n').replace(/%20/g, ' ');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(txtPlain).then(() => {
            alert('No se pudo abrir WhatsApp automáticamente. El mensaje se copió al portapapeles. Pégalo manualmente en WhatsApp.');
          }).catch(() => {
            alert('Error al procesar la solicitud. Por favor intentá nuevamente.');
          });
        } else {
          alert('Error al procesar la solicitud. Por favor intentá nuevamente.');
        }
      }
      return false;
    }
    
    function contactAdvisor() {
      const P = params();
      const vbmFormatted = fmt(P.V);
      const cuotaFormatted = fmt(P.total);
      const message = `Hola! Me interesa el Plan de Ahorro OMBU.

💰 *Valor Básico Móvil:* ${vbmFormatted}
📅 *Cuota mensual:* ${cuotaFormatted}

¿Podrían contactarme para más información?`;
      const waUrl = `https://wa.me/${WHATSAPP_TEL}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    }

    window.sendFormWA = sendFormWA;
    window.sendPlanWA = sendPlanWA;
    window.contactAdvisor = contactAdvisor;

    // FAQ functionality
    document.addEventListener('DOMContentLoaded', function() {
      const faqToggles = document.querySelectorAll('.faq-toggle');
      
      faqToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);
          const icon = this.querySelector('svg');
          targetElement.classList.toggle('hidden');
          if (targetElement.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
          } else {
            icon.style.transform = 'rotate(180deg)';
          }
        });
      });

      const modal = document.getElementById('dlg-plan');
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.close();
        }
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.open) {
          modal.close();
        }
      });
    });

    // ========= CALCULADORA =========
    const $ = id => document.getElementById(id);
    const fmt = n => n.toLocaleString('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0});
    const clampToStep = (val, min, max, step) => {
      let v = Math.max(min, Math.min(max, val));
      const mod = (v - min) % step;
      if(mod !== 0) v = v - mod;
      return v;
    };

    // Tabs del modal plan
    const tabButtons = document.querySelectorAll('.tabs-plan button');
    tabButtons.forEach(b=>{
      b.addEventListener('click', ()=>{
        tabButtons.forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        ['calc','pre','spec'].forEach(k=>{
          document.getElementById('tab-'+k).classList.add('hidden');
        });
        const t = b.dataset.tab;
        document.getElementById('tab-'+t).classList.remove('hidden');
      });
    });

    let persona = 'pf';
    $('pf')?.addEventListener('click', ()=>{ persona='pf'; $('pf').classList.add('active'); $('pj').classList.remove('active'); calc(); });
    $('pj')?.addEventListener('click', ()=>{ persona='pj'; $('pj').classList.add('active'); $('pf').classList.remove('active'); calc(); });

    let lastRows = [];

    function params(){
      const V = clampToStep(Number($('vbm').value||0), 40000000, 72000000, 10000);
      $('vbm').value = V;
      const cuota = Math.max(1, Math.min(60, Number($('ncuota').value||1)));
      $('ncuota').value = cuota;

      const selloTotal = ($('prov').value === 'cordoba') ? 0 : V * 0.012;
      const selloCuota = selloTotal / 6;

      const adminPorCuota = (V * 0.08) / 60;
      const adminIVA = adminPorCuota * 0.21;
      const adminTotalCuota = adminPorCuota + adminIVA;

      const cuotaPura = V / 60;

      const idc = cuotaPura * 0.00804;

      const saldoDeudor = V - cuotaPura * (cuota - 1);
      const seguro = Math.max(0, saldoDeudor) * 0.000833;

      const total = cuotaPura + adminTotalCuota + seguro + idc;

      return {V, cuota, selloCuota, selloTotal, adminTotalCuota, cuotaPura, idc, seguro, total};
    }

    function calc(){
      const P = params();
      $('k_pura').textContent  = fmt(P.cuotaPura);
      $('k_adm').textContent   = fmt(P.adminTotalCuota);
      $('k_seg').textContent   = fmt(P.seguro);
      $('k_total').textContent = fmt(P.total);
      $('k_sello').textContent = fmt((P.cuota>=1 && P.cuota<=6)? P.selloCuota : 0);

      const tbody = $('t_body');
      tbody.innerHTML = '';
      lastRows = [];
      let saldo = P.V;
      for(let i=1;i<=60;i++){
        const seg = Math.max(0, saldo) * 0.000833;
        const idc = (P.cuotaPura * 0.00804);
        const totalSSello = P.cuotaPura + P.adminTotalCuota + seg + idc;
        const sello = (i<=6) ? P.selloCuota : 0;
        const totalConSello = totalSSello + sello;
        saldo -= P.cuotaPura;

        if(i<=12){
          tbody.insertAdjacentHTML('beforeend', `
            <tr>
              <td>${i}</td>
              <td>${fmt(P.cuotaPura)}</td>
              <td>${fmt(P.adminTotalCuota)}</td>
              <td>${fmt(seg)}</td>
              <td>${fmt(idc)}</td>
              <td>${fmt(totalSSello)}</td>
              <td>${sello?fmt(sello):'-'}</td>
              <td>${fmt(totalConSello)}</td>
              <td>${fmt(Math.max(saldo,0))}</td>
            </tr>
          `);
        }
        lastRows.push({
          cuota:i,
          cuota_pura:P.cuotaPura,
          admin_iva:P.adminTotalCuota,
          seguro:seg,
          idc:idc,
          total_sin_sello:totalSSello,
          sello:sello,
          total_con_sello:totalConSello,
          saldo:Math.max(saldo,0)
        });
      }
    }

    function shareCalc(){
      const P = params();
      const text = `Plan OMBU — VBM ${fmt(P.V)} · Cuota ${fmt(P.total)} (sin sello) · Cuota pura ${fmt(P.cuotaPura)} · Adm+IVA ${fmt(P.adminTotalCuota)} · Seguro ${fmt(P.seguro)} · IDC ${fmt(P.idc)}.`;
      if(navigator.share){
        navigator.share({title:'Plan OMBU', text}).catch(()=>{});
      }else{
        navigator.clipboard.writeText(text).then(()=>alert('Resumen copiado al portapapeles'));
      }
    }

    function downloadCSV(){
      if(!lastRows.length) calc();
      const head = ['Cuota','Cuota Pura','Adm+IVA','Seguro Vida','Imp. Déb/Cred','Total s/ Sello','Sello (1-6)','Total con Sello','Saldo'];
      const lines = [head.join(',')];
      lastRows.forEach(r=>{
        lines.push([r.cuota,r.cuota_pura,r.admin_iva,r.seguro,r.idc,r.total_sin_sello,r.sello,r.total_con_sello,r.saldo].join(','));
      });
      const blob = new Blob([lines.join('\n')],{type:'text/csv;charset=utf-8;'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'calculo_plan_ombu.csv';
      a.click(); URL.revokeObjectURL(a.href);
    }

    function downloadCalcAndSpec(){
      const P = params();
      const spec = `
Calculador de cuota — OMBU / GRUPOZZETTO
Tipo: ${persona==='pf'?'Persona física':'Persona jurídica'}
Valor Básico Móvil: ${fmt(P.V)}
Cuota N°: ${$('ncuota').value}
Cuota Pura: ${fmt(P.cuotaPura)}
Cuota Administrativa + IVA: ${fmt(P.adminTotalCuota)}
Seguro de Vida: ${fmt(P.seguro)}
Imp. Débito/Crédito (0,804%): ${fmt(P.idc)}
Total de Cuota (sin Imp. Sello): ${fmt(P.total)}
Imp. al Sello (prorrateado 1-6): ${fmt(P.selloCuota)} por cuota (Provincia: ${$('prov').value==='cordoba'?'Córdoba (0%)':'Otra (1,2%)'})

Especificaciones del Plan
Plazo: 60 meses / cuotas en pesos y sin interés
Carga Administrativa: 8.0% fija para financiación a 5 años
Adjudicaciones mensuales: por sorteo o licitación
* Si el cliente ordena un bien de MENOR valor al Valor Móvil Adjudicado, la diferencia será acreditada como cuotas adelantadas.
* Si ordena un bien de MAYOR valor al Valor Adjudicado, la diferencia será abonada por el cliente.
Impuesto al sello: 1,2% para todas las provincias a excepción de Córdoba. (Se abona prorrateado en las primeras 6 cuotas)
Impuesto al débito y crédito (Ley 25.413): 0,804% sobre la cuota pura mensual.
Seguro de Vida: 0,0833% del saldo deudor. Hasta 64 años inclusive.
Derecho de Adjudicación: 1% + IVA del valor Móvil adjudicado.
Gestoría: $56.517 + Formularios $47.155 a cargo del cliente.
Documentación requerida: Declaraciones juradas UIF, salud, y datos del solicitante.
Precios: Tomados de la Lista de Precios de Fábrica.
Presentar: fotocopia de DNI (frente y dorso).
`;
      const blob = new Blob([spec],{type:'text/plain;charset=utf-8;'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'calculo_y_especificaciones_plan_ombu.txt';
      a.click(); URL.revokeObjectURL(a.href);
    }

    ['vbm','ncuota','prov'].forEach(id=>{ document.getElementById(id)?.addEventListener('change', calc); });

    document.addEventListener('click', (e)=>{
      const img = e.target.closest('img[data-full]');
      if(!img) return;
      const modal = document.getElementById('img-modal');
      const full = document.getElementById('img-full');
      full.src = img.dataset.full;
      full.alt = img.alt || '';
      modal.showModal();
    });

    // Inicializar calculadora al cargar
    calc();