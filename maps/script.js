'use strict';

const POIS = [
  {
    name: "La Bibliothèque de la bande dessinée",
    x: 32, y: 39,
    description: "Ouverte toute l’année et disposant d’un fonds consultable sur place ou à emprunter, la Bibliothèque de la bande dessinée est accessible à tous pour une pause lecture et détente. Elle permet aux visiteurs du Musée de la bande dessinée d’approfondir leur découverte, et aux publics locaux de découvrir tout au long de l’année des nouveautés, des sélections thématiques et autres coups de cœur de l’équipe.",
    url: "https://www.citebd.org/venir-a-la-cite/la-bibliotheque-de-la-bande-dessinee"
  },
  {
    name: "Rives de charente",
    x: 9, y: 16,
    description: "Très bel endroit pour s'adonner à la marche, admirer des cygnes et canards , un lieu paisible.",
    url: "https://www.cscs-rivesdecharente.com/"
  },
  {
    name: "Château de Dampierre-sur-Boutonne",
    x: 25, y: 21,
    description: "En 995, sur les hauts de Dampierre existait le Chatel Gaillard dont Adalbert était le Seigneur. Le château primitif puis le château féodal étaient sur le tertre où se trouve au XXe siècle l'église romane. ",
    url: "https://www.route-historique-saintonge.fr/fr/dampierre-chateau-alchimie"
  },
  {
    name: "Musée de la Bande Dessinée",
    x: 30, y: 14,
    description: "La Cité internationale de la bande dessinée et de l’image est située à Angoulême. C'est un établissement unique en France dédié à la bande dessinée et à l'image.",
    url: "https://www.angouleme-tourisme.com/patrimoine-culturel/le-musee-de-la-bande-dessinee/"
  },
  {
    name: "stade leonide lacroix",
    x: 53, y: 5,
    description: "Avec des installations modernes et bien entretenues, le stade est le lieu parfait pour s'adonner à une variété de sports et de loisirs",
    url: "https://www.angouleme.fr/points-interets/stade-de-football-leonide-lacroix/"
  },
  {
    name: "Île Marquet",
    x: 48, y: 29,
    description: "Joyau naturel d'Angoulême, est aussi riche d'une longue histoire durant laquelle plusieurs noms lui furent donnés.",
    url: "https://www.infiniment-charentes.com/fiche-sit/lile-marquet-5995976/"
  },
  {
    name: "Île aux Vaches",
    x: 5, y: 24,
    description: "En août 2011 puis en juillet 2015, la coupe d’Europe de Montgolfières y fait étape",
    url: "https://fr.wikipedia.org/wiki/%C3%8Ele_aux_Vaches_(Charente)"
  },
  {
    name: "Diocèse d'Angoulême",
    x: 8, y: 56,
    description: "Le diocèse d'Angoulême est un diocèse de l'Église catholique de France. Le siège épiscopal est à Angoulême. Érigé dès le IIIᵉ siècle, il est le diocèse historique de l'Angoumois, et recouvre actuellement le territoire du département de la Charente.",
    url: "https://charente.catholique.fr/"
  },
  {
    name: "Remparts d'Angoulême",
    x: 12, y: 48,
    description: "Le Circuit International Automobile des Remparts d'Angoulême, aussi connu sous le nom de Grand Prix Internationale des Remparts, Grand Prix des Remparts et Circuit des Remparts, est une épreuve automobile ",
    url: "https://charente.catholique.fr/"
  },
  {
    name: "Remparts d'Angoulême",
    x: 45, y: 49,
    description: "Le Circuit International Automobile des Remparts d'Angoulême, aussi connu sous le nom de Grand Prix Internationale des Remparts, Grand Prix des Remparts et Circuit des Remparts, est une épreuve automobile ",
    url: "https://charente.catholique.fr/"
  },
  {
    name: "place pont beaulieux",
    x: 20, y: 51,
    description: "Située à l'extrémité ouest du plateau et de la vieille ville, cette place offre un large panorama.La place longe un très grand lycée, situé à l'emplacement d'une ancienne abbaye.",
    url: "https://www.seevisit.fr/france/nouvelle-aquitaine/angouleme/place-beaulieu"
  },
  {
    name: "Hôtel de Bardines",
    x: 26, y: 59,
    description: "L'imposante façade de l'hôtel de Bardines sur la rue de Beaulieu (anciennement des Cordeliers) comporte trois parties : au centre, un corps de logis entre deux pavillons d'angle de plan carré à toit pyramidal est orné d'une impressionnante galerie au-dessus d'un rez de chaussée à trois travées ",
    url: "https://www.vieil-angouleme.org/bardines/plus.html"
  },
  {
    name: "Circuit des Remparts ",
    x: 50, y: 66,
    description: "Le Circuit des Remparts d'Angoulême est une épreuve automobile de vitesse disputée sur un circuit automobile long de 1 279 mètres dont le tracé joue avec les remparts d'Angoulême.",
    url: "https://www.angouleme-tourisme.com/agenda/les-festivals/circuit-des-remparts/"
  },
  {
    name: "places des halles",
    x: 61, y: 61,
    description: "Les commerçants vous accueillent du mardi au dimanche matin de 7 h à 13 h. Vous pouvez y trouver restaurateurs, primeurs, caviste, fromager, boulanger, boucher, charcutier, etc. Et des produits de qualité, proches de chez vous !",
    url: "https://marche-halles.fr/"
  },
  {
    name: "mur peint",
    x: 73, y: 58,
    description: "Il s’agit du second plus long parcours au monde après celui de Bruxelles. Il est un des points majeurs d’attraction touristique de la ville, avec une visite guidée de l’Office du tourisme, une application pour une découverte en autonomie ainsi qu’un parcours de géocatching très prisé. ",
    url: "https://www.angouleme.fr/mes-loisirs/ville-de-limage/murs-bd/"
  },
  {
    name: "mur peint",
    x: 60, y: 53,
    description: "Il s’agit du second plus long parcours au monde après celui de Bruxelles. Il est un des points majeurs d’attraction touristique de la ville, avec une visite guidée de l’Office du tourisme, une application pour une découverte en autonomie ainsi qu’un parcours de géocatching très prisé. ",
    url: "https://www.angouleme.fr/mes-loisirs/ville-de-limage/murs-bd/"
  },
  {
    name: "mur peint",
    x: 81, y: 49,
    description: "Il s’agit du second plus long parcours au monde après celui de Bruxelles. Il est un des points majeurs d’attraction touristique de la ville, avec une visite guidée de l’Office du tourisme, une application pour une découverte en autonomie ainsi qu’un parcours de géocatching très prisé. ",
    url: "https://www.angouleme.fr/mes-loisirs/ville-de-limage/murs-bd/"
  },
  {
    name: "mur peint",
    x: 75, y: 78,
    description: "Il s’agit du second plus long parcours au monde après celui de Bruxelles. Il est un des points majeurs d’attraction touristique de la ville, avec une visite guidée de l’Office du tourisme, une application pour une découverte en autonomie ainsi qu’un parcours de géocatching très prisé. ",
    url: "https://www.angouleme.fr/mes-loisirs/ville-de-limage/murs-bd/"
  },
  {
    name: "mur peint",
    x: 63, y: 74,
    description: "Il s’agit du second plus long parcours au monde après celui de Bruxelles. Il est un des points majeurs d’attraction touristique de la ville, avec une visite guidée de l’Office du tourisme, une application pour une découverte en autonomie ainsi qu’un parcours de géocatching très prisé. ",
    url: "https://www.angouleme.fr/mes-loisirs/ville-de-limage/murs-bd/"
  },
  {
    name: "mur peint",
    x: 36, y: 61,
    description: "Il s’agit du second plus long parcours au monde après celui de Bruxelles. Il est un des points majeurs d’attraction touristique de la ville, avec une visite guidée de l’Office du tourisme, une application pour une découverte en autonomie ainsi qu’un parcours de géocatching très prisé. ",
    url: "https://www.angouleme.fr/mes-loisirs/ville-de-limage/murs-bd/"
  },
  {
    name: "Square robert guichard",
    x: 13, y: 81,
    description: "Square Robert Guichard. Les squares. Infos utiles. 187bis Avenue Jules Ferry, 16000 Angoulême. Localisation : 187bis Avenue Jules Ferry 16000 Angoulême.",
    url: "https://www.gralon.net/plan-ville/planr-square-robert-guichard-angouleme-272188.htm"
  },
  {
    name: "Statut Carnot",
    x: 40, y: 82,
    description: "Français : Buste de Sadi Carnot et allégorie de la renommée tenant un rameau d'olivier et une couronne de lauriers. Détail du Monument (1897) à Sadi Carnot",
    url: "https://www.angouleme.fr/points-interets/statut-carnot/"
  },
  {
    name: "Cathédrale Saint-Pierre d'Angoulême",
    x: 36, y: 71,
    description: "La cathédrale Saint-Pierre d'Angoulême est une cathédrale de style roman située à Angoulême, dans le département de la Charente. Église principale du diocèse d'Angoulême, elle fait l’objet d’un classement au titre des monuments historiques par la liste de 1840",
    url: "https://www.angouleme-tourisme.com/patrimoine-culturel/cathedrale-saint-pierre-angouleme/"
  },
  {
    name: "Théâtre d'Angoulême",
    x: 47, y: 83,
    description: "Le théâtre d’Angoulême est une scène nationale. Chaque saison le théâtre accueille plus de 50 000 spectateurs et propose près de 200 représentations dans toutes les disciplines : théâtre, musique",
    url: "https://www.theatre-angouleme.org/"
  },
  {
    name: "Hôtel de ville d’Angoulême",
    x: 55, y: 76,
    description: "L’hôtel de ville d'Angoulême est un édifice public construit de 1858 à 1869 au cœur de la ville-haute d'Angoulême.",
    url: "https://www.angouleme.fr/"
  },
  {
    name: "Église Notre-Dame d'Obézine",
    x: 68, y: 84,
    description: "L’église Notre-Dame d’Obézine est une église paroissiale située du côté sud-est de la ville française d’Angoulême, dans le département de la Charente et le diocèse d'Angoulême. Elle fait l’objet d’une inscription au titre des monuments historiques depuis le 19 septembre 2001.",
    url: "https://www.angouleme-tourisme.com/patrimoine-culturel/eglise-notre-dame-dobezine/"
  },
  {
    name: "place saint gelais",
    x: 75, y: 94,
    description: "Découvrez Le Saint Gelais, un hôtel 4 étoiles niché au cœur d'Angoulême.Avec ses 16 chambres dont 5 suites luxueuses et son restaurant bistronomique donnant sur une jolie terrasse avec piscine au sein du parc, nous vous invitons à une expérience exceptionnelle, alliant charme, détente et saveurs inédites.",
    url: "https://www.hotel-saint-gelais-angouleme.com/"
  },
  {
    name: "place gerard perot",
    x: 79, y: 64,
    description: "Idéalement localisé dans le centre-ville et à 400 m de la gare SNCF, notre hôtel vous propose de découvrir un autre chez soi. Toutes nos chambres sont équipées de doubles fenêtres, de double vitrage, de store électrique, de la climatisation",
    url: "https://www.pagesjaunes.fr/annuaire/place-gerard-perot-angouleme-16/-"
  },
  {
    name: "Gare d'Angoulême",
    x: 94, y: 28,
    description: "La gare d'Angoulême est une gare ferroviaire française située sur le territoire de la commune d'Angoulême, dans le département de la Charente, en région Nouvelle-Aquitaine.",
    url: "https://www.garesetconnexions.sncf/fr/gares-services/angouleme"
  },
  {
    name: "L'Alpha - Médiathèque de GrandAngoulême",
    x: 83, y: 29,
    description: "Conçu par l'architecte Françoise Raynaud de l'agence Loci Anima, L'Alpha, médiathèque de GrandAngoulême, a ouvert ses portes le 22 décembre 2015. Conçue comme un lieu de rencontres et de partage, la médiathèque s’inscrit à la fois dans un plan de développement de la lecture publique mais aussi dans un grand projet urbain visant à créer une synergie avec le futur quartier économique en plein développement. Depuis la gare, le visiteur peut traverser les voies sur une passerelle, se rendre à l’Alpha ou bien poursuivre sa route jusqu’à la place St Jacques, cœur du quartier de L’Houmeau traversé par les quais de Charente où se rencontrent familles, résidents, salariés des entreprises et étudiants des écoles environnantes. L’Alpha crée ainsi dans cette partie basse de la ville, un pôle qui équilibre celui que constitue la Cité Internationale de la Bande Dessinée et le pôle image Magelis.",
    url: "https://www.lalpha.org/index.php"
  },
  {
    name: "Beaumarnot",
    x: 42, y: 92,
    description: "Avec trois musées particulièrement vivants, Angoulême s’impose comme une ville moyenne résolument tournée vers la culture, par la qualité des collections et des expositions proposées tout au long de l’année. Découvrez ici les cinq lieux culturels de la ville.",
    url: "https://www.bottin.fr/fiche-locale/bhjifjajjdeejdgjfibc--beaumarnot--angouleme.htm"
  }
];
const map = document.getElementById('map');
const tooltip = document.getElementById('tooltip');
function renderPins() {
  POIS.forEach((poi, idx) => {
    const btn = document.createElement('button');
    btn.className = 'pin';
    btn.style.left = poi.x + '%';
    btn.style.top = poi.y + '%';
    btn.setAttribute('aria-label', poi.name);
    btn.dataset.index = idx;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showTooltipFor(poi, btn);
    });
    map.appendChild(btn);
  });
}

function showTooltipFor(poi, pinEl) {
  tooltip.innerHTML = `
    <div class="row">
      <button class="close" aria-label="Fermer">×</button>
    </div>
    <h3>${poi.name}</h3>
    <p>${poi.description || ""}</p>
    <div class="actions">
      <a href="${poi.url}" target="_blank" rel="noopener">Voir la page complète</a>
    </div>
  `;
  tooltip.classList.add('show');
  tooltip.setAttribute('aria-hidden', 'false');

  const mapRect = map.getBoundingClientRect();
  const pinRect = pinEl.getBoundingClientRect();
 
  const desiredLeft = (pinRect.left - mapRect.left) + 16;
  const desiredTop = (pinRect.top - mapRect.top) - 10;

  tooltip.style.left = '0px';
  tooltip.style.top = '-9999px';
  const ttRect = tooltip.getBoundingClientRect();

  const margin = 8;
  let left = Math.min(Math.max(desiredLeft, margin), mapRect.width - ttRect.width - margin);
  let top = Math.min(Math.max(desiredTop, margin), mapRect.height - ttRect.height - margin);

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';

  tooltip.querySelector('.close').addEventListener('click', hideTooltip);
}

function hideTooltip() {
  tooltip.classList.remove('show');
  tooltip.setAttribute('aria-hidden', 'true');
}

document.addEventListener('click', (e) => {
  if (!tooltip.contains(e.target)) hideTooltip();
});

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hideTooltip(); });


map.addEventListener('click', (e) => {
  if (!e.shiftKey) return;
  const rect = map.getBoundingClientRect();
  const xPct = ((e.clientX - rect.left) / rect.width) * 100;
  const yPct = ((e.clientY - rect.top) / rect.height) * 100;
  console.log(`Coordonnées : x ${xPct.toFixed(2)} %, y ${yPct.toFixed(2)} %`);

  const mark = document.createElement('div');
  mark.style.position = 'absolute';
  mark.style.left = xPct + '%';
  mark.style.top = yPct + '%';
  mark.style.transform = 'translate(-50%, -50%)';
  mark.style.width = '10px'; mark.style.height = '10px';
  mark.style.border = '2px solid #fff';
  mark.style.borderRadius = '50%';
  mark.style.pointerEvents = 'none';
  map.appendChild(mark);
  setTimeout(() => mark.remove(), 1200);
});

renderPins();
