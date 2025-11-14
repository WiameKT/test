import cathedralOfAshes from '../assets/artworks/cathedral-of-ashes.png';
import dawnLiturgy from '../assets/artworks/dawn-liturgy.png';
import emberCrown from '../assets/artworks/ember-crown.png';
import fermataOfThorns from '../assets/artworks/fermata-of-thorns.png';
import gardenOfCinders from '../assets/artworks/garden-of-cinders.png';
import moonSuture from '../assets/artworks/moon-suture.png';
import oracleTide from '../assets/artworks/oracle-tide.png';
import saltPsalm from '../assets/artworks/salt-psalm.png';
import seraphimReservoir from '../assets/artworks/seraphim-reservoir.png';
import silkWound from '../assets/artworks/silk-wound.png';

export const artworks = [
  {
    id: 'dawn-liturgy',
    title: {
      fr: "Liturgie de l'Aube",
      en: 'Dawn Liturgy'
    },
    dateTechnique: 'June 2025 · Graphite, gold leaf on cotton paper',
    status: 'Original artwork available',
    image: dawnLiturgy,
    imageAlt: 'Graphite portrait of a serene woman bathed in a warm halo with subtle gold leaf accents.',
    lore: [
      "She is the first daughter who guards the ember before dawn, her gaze holding vigil for those who still sleep.",
      "In her breath, chants of forgotten temples rise with the light, stitching holiness into the edges of the world."
    ],
    circumstances: [
      "Sketched at sunrise after a night of restless dreams about family myths, she emerged as a keeper of their glow.",
      "I painted the gold leaf while listening to early morning bells in Paris, letting the reverberations guide each stroke."
    ],
    audio: '/audio/dawn-liturgy.wav'
  },
  {
    id: 'ember-crown',
    title: {
      fr: 'Couronne de Braise',
      en: 'Ember Crown'
    },
    dateTechnique: 'June 2025 · Ink, watercolor wash on handmade paper',
    status: 'Original artwork sold',
    image: emberCrown,
    imageAlt: 'Ink portrait of a fierce woman with a glowing crown dissolving into smoke.',
    lore: [
      "Flames lace her braids like a coronation meant for warriors, yet her stare speaks of tenderness guarded by armor.",
      "She is the daughter who never forgets the cost of light, bearing sparks for those who lost their fire."
    ],
    circumstances: [
      "Drawn after hearing my grandmother recount stories of exile, I needed her to wear strength without erasing softness.",
      "Watercolor washes bled unexpectedly that night, and I followed the drips until they resembled burning filigree."
    ],
    audio: '/audio/ember-crown.wav'
  },
  {
    id: 'silk-wound',
    title: {
      fr: 'Blessure de Soie',
      en: 'Silk Wound'
    },
    dateTechnique: 'July 2025 · Graphite, thread embroidery on vellum',
    status: 'Print available',
    image: silkWound,
    imageAlt: 'Portrait highlighting embroidered threads encircling the neck like a luminous collar.',
    lore: [
      "Threaded silk binds her throat like a vow; she speaks through stitches and silences lined with opaline shimmer.",
      "She tends the wounds of others by naming her own, weaving them into textiles that refuse to tear."
    ],
    circumstances: [
      "I embroidered directly on the vellum after visiting a textile archive in Lyon—the curator whispered about garments that survived wars.",
      "The act of sewing on paper slowed my breathing; each puncture was a prayer for resilience."
    ],
    audio: '/audio/silk-wound.wav'
  },
  {
    id: 'oracle-tide',
    title: {
      fr: 'Marée Oracle',
      en: 'Oracle Tide'
    },
    dateTechnique: 'July 2025 · Watercolor, graphite on cotton paper',
    status: 'Original artwork available',
    image: oracleTide,
    imageAlt: 'Watercolor portrait with tidal motifs and lunar reflections surrounding the subject.',
    lore: [
      "Tidal sigils braid her hair, and her pupils mirror eclipses; she hears prophecies in the hush between waves.",
      "She is the daughter who ferries secrets across oceans, guarding the salt of grief and the taste of hope."
    ],
    circumstances: [
      "Painted beside the Atlantic after a storm, the salt on my hands bled into the paper and dictated her palette.",
      "I wrote fragments of poetry about tides in my sketchbook, then rinsed them away so only the stains remained."
    ],
    audio: '/audio/oracle-tide.wav'
  },
  {
    id: 'cathedral-of-ashes',
    title: {
      fr: 'Cathédrale de Cendres',
      en: 'Cathedral of Ashes'
    },
    dateTechnique: 'August 2025 · Charcoal, pastel dust on linen board',
    status: 'Original artwork available',
    image: cathedralOfAshes,
    imageAlt: 'Charcoal portrait with cathedral-like arches formed from soot and ember trails.',
    lore: [
      "Within her ribs, ruined cathedrals find sanctuary; soot becomes stained glass whenever she exhales.",
      "She is the daughter who keeps vigil for the burnt sanctuaries, stitching churches of smoke for the lost."
    ],
    circumstances: [
      "Created after visiting a fire-damaged chapel near Marseille; the smell of charcoal clung to my clothes for days.",
      "I pressed ashes collected on-site into the paper, letting them decide where the architecture would appear."
    ],
    audio: '/audio/cathedral-of-ashes.wav'
  },
  {
    id: 'seraphim-reservoir',
    title: {
      fr: 'Réservoir Séraphique',
      en: 'Seraphim Reservoir'
    },
    dateTechnique: 'August 2025 · Watercolor, graphite, mica on cotton',
    status: 'Print available',
    image: seraphimReservoir,
    imageAlt: 'Watercolor portrait with ethereal wings and liquid textures suspended behind the figure.',
    lore: [
      "Her pulse is a submerged choir; wings unfurl underwater before rising through her translucent spine.",
      "She baptizes sorrow into constellations, keeping reservoirs of grace for those who cannot cry anymore."
    ],
    circumstances: [
      "I drew her after meditating beside a fountain in Avignon, tracing ripples that looked like feathers.",
      "Ink bled into the water pooling on the page, creating halos I could not have planned."
    ],
    audio: '/audio/seraphim-reservoir.wav'
  },
  {
    id: 'garden-of-cinders',
    title: {
      fr: 'Jardin de Braises',
      en: 'Garden of Cinders'
    },
    dateTechnique: 'September 2025 · Watercolor, ink on mulberry paper',
    status: 'Original artwork available',
    image: gardenOfCinders,
    imageAlt: 'Portrait of a contemplative woman surrounded by ember-like floral motifs.',
    lore: [
      "She tends a nocturnal garden where petals ignite at dusk, illuminating the soot-stained paths she walks.",
      "Every seed she plants remembers a catastrophe, yet blooms with stubborn firefly light."
    ],
    circumstances: [
      "Sketched while traveling by train through industrial suburbs; the smokestacks looked like withered trees to me.",
      "I pressed charcoal dust into watercolor blooms, letting the grit define the flowered silhouettes."
    ],
    audio: '/audio/garden-of-cinders.wav'
  },
  {
    id: 'moon-suture',
    title: {
      fr: 'Suture de Lune',
      en: 'Moon Suture'
    },
    dateTechnique: 'September 2025 · Graphite, silver leaf on cold-press paper',
    status: 'Original artwork sold',
    image: moonSuture,
    imageAlt: 'Portrait illuminated by crescent motifs and fine silver thread detailing.',
    lore: [
      "Silver threads lace her eyelids, suturing moon phases so she can dream without losing the night.",
      "She is the insomniac daughter who mends insomnia into a tapestry of lunar prayers."
    ],
    circumstances: [
      "I stitched metallic thread onto the drawing after nights of disrupted sleep—the rhythm mirrored my racing thoughts.",
      "Graphite smudges became lunar dust when I polished them gently with cotton soaked in lavender oil."
    ],
    audio: '/audio/moon-suture.wav'
  },
  {
    id: 'fermata-of-thorns',
    title: {
      fr: "Fermata d'Épines",
      en: 'Fermata of Thorns'
    },
    dateTechnique: 'October 2025 · Graphite, ink glaze on panel',
    status: 'Original artwork available',
    image: fermataOfThorns,
    imageAlt: 'Portrait featuring thorny motifs encircling the subject’s face like suspended musical notation.',
    lore: [
      "Thorns hover as musical notes above her lips; she keeps hymns in suspension to protect their fragile echo.",
      "Her silence conducts choirs of survivors, letting their breaths rest in the pause she guards."
    ],
    circumstances: [
      "Composed while listening to recordings of medieval polyphony—the dissonant intervals became bramble-like strokes.",
      "I pricked my finger on an actual thorn collected from a rose garden; a drop of blood tinted the ink wash."
    ],
    audio: '/audio/fermata-of-thorns.wav'
  },
  {
    id: 'salt-psalm',
    title: {
      fr: 'Psaume de Sel',
      en: 'Salt Psalm'
    },
    dateTechnique: 'November 2025 · Ink, gouache on recycled paper',
    status: 'Print available',
    image: saltPsalm,
    imageAlt: 'Portrait of a woman framed by crystalline salt formations and tidal motifs.',
    lore: [
      "Crystalline hymns settle on her cheeks, recording the tides she has survived.",
      "She is the daughter who distills storms into psalms, letting every tear crystallise into guidance."
    ],
    circumstances: [
      "Conceived during a residency near salt marshes; I collected saline water and sprayed it over wet ink to crystallise textures.",
      "The poem that accompanied the piece was sung quietly while drawing, so I etched its rhythm into the shading."
    ],
    audio: '/audio/salt-psalm.wav'
  }
];