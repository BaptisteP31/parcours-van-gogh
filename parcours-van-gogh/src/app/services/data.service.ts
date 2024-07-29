import { Injectable } from '@angular/core';

export interface Message {
  title: string;
  date: string;
  id: number;
  text: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      title: 'La Nuit étoilée',
      date: '1888',
      id: 0,
      text: "La Nuit étoilée\" est un tableau de Vincent van Gogh peint en 1888. Il montre un ciel nocturne rempli d'étoiles brillantes au-dessus de la ville d'Arles. Les étoiles scintillent dans le ciel bleu foncé, et le tableau est rempli de mouvement et de lumière. Van Gogh a utilisé des couleurs vibrantes pour rendre le ciel vivant et magique. C'est comme si les étoiles dansaient dans la nuit, créant une scène paisible mais pleine d'énergie.",
      image: 'la_nuit_etoilee_1888.jpg',
    },
    {
      title: "L'escalier du pont de trinquetaille",
      date: '1888',
      id: 1,
      text: "\"L'Escalier de Trinquetaille\" est un tableau peint par Vincent van Gogh en \r\n1888. Il montre un grand escalier en pierre \u00E0 Arles. Van Gogh a captur\u00E9 la \r\nlumi\u00E8re du soleil sur les marches et les b\u00E2timents autour, en utilisant des \r\ncouleurs chaudes et des lignes dynamiques. Cet escalier \u00E9tait un endroit \r\nfr\u00E9quent\u00E9 par les habitants, et van Gogh a voulu montrer la vie quotidienne \r\net l'architecture unique de la ville.",
      image: 'escalier_pont_de_trinquetaille.jpg',
    },
    {
      title: "La maison jaune",
      date: '1888',
      id: 2,
      text: "\"La Maison Jaune\" est un tableau de Vincent van Gogh peint en 1888. Il \r\nrepr\u00E9sente la maison o\u00F9 il vivait \u00E0 Arles. La maison est peinte en jaune vif, \r\navec des fen\u00EAtres bleues et un toit rouge. Autour de la maison, on voit des \r\narbres verts et un ciel bleu clair. Ce tableau montre le lieu o\u00F9 van Gogh a \r\ncr\u00E9\u00E9 beaucoup de ses \u0153uvres, et il utilise des couleurs \u00E9clatantes pour \r\nmontrer la chaleur et l'\u00E9nergie de cet endroit sp\u00E9cial.",
      image: 'la_maison_jaune.jpg',
    },
    {
      title: "Les arènes d'Arles",
      date: '1888',
      id: 3,
      text: "\"Les Ar\u00E8nes d'Arles\" est un tableau de Vincent van Gogh peint en 1888. Il \r\nmontre les ar\u00E8nes romaines d'Arles, un grand amphith\u00E9\u00E2tre o\u00F9 les gens \r\nallaient voir des spectacles. Van Gogh a utilis\u00E9 des couleurs vives et des \r\nlignes courbes pour capturer l'\u00E9nergie et l'excitation de ce lieu historique. Les \r\nar\u00E8nes sont un symbole de la culture et de l'histoire d'Arles, et van Gogh a \r\nvoulu montrer leur importance dans la vie de la ville.\r\n",
      image: 'les_arenes_d_arles.jpg',
    },
    {
      title: "L'allée des Alyscamps",
      date: '1888',
      id: 4,
      text: "\"L'All\u00E9e des Alyscamps\" est un tableau de Vincent van Gogh peint en 1888. Il \r\nmontre une all\u00E9e bord\u00E9e d'arbres avec des feuilles rouges et jaunes. Cette \r\nall\u00E9e \u00E9tait un ancien cimeti\u00E8re romain \u00E0 Arles, et van Gogh a captur\u00E9 la \r\nbeaut\u00E9 et la tranquillit\u00E9 de cet endroit. Les couleurs d'automne et les ombres \r\ncr\u00E9ent une sc\u00E8ne paisible et po\u00E9tique, montrant comment van Gogh voyait \r\nla beaut\u00E9 dans les lieux historiques et naturels.",
      image: 'l_allee_des_alyscamps.jpg',
    },
    {
      title: "L'entrée du jardin public",
      date: '1888',
      id: 5,
      text: "\"L'Entr\u00E9e du Jardin Public \u00E0 Arles\" est un tableau de Vincent van Gogh peint \r\nen 1888. Il montre l'entr\u00E9e d'un jardin public avec des arbres et des fleurs \r\ncolor\u00E9es. Van Gogh a utilis\u00E9 des couleurs vives et des coups de pinceau \r\n\u00E9nergiques pour montrer la beaut\u00E9 et la vitalit\u00E9 du jardin. C'est un endroit o\u00F9 \r\nles gens allaient se d\u00E9tendre et profiter de la nature, et van Gogh a voulu \r\ncapturer cette atmosph\u00E8re joyeuse et paisible.\r\n",
      image: 'l_entree_du_jardin_public_a_Arles.jpg',
    },
    {
      title: "La cour de l'hôpital d'Arles",	
      date: '1889',
      id: 6,
      text: "\"La Cour de l'H\u00F4pital d'Arles\" est un tableau de Vincent van Gogh peint en \r\n1889. Il montre la cour int\u00E9rieure de l'h\u00F4pital o\u00F9 van Gogh a s\u00E9journ\u00E9. La cour \r\nest remplie de fleurs color\u00E9es et entour\u00E9e d'arches. Van Gogh a utilis\u00E9 des \r\ncouleurs lumineuses pour rendre la sc\u00E8ne joyeuse et apaisante. Ce tableau \r\nmontre comment van Gogh trouvait la beaut\u00E9 m\u00EAme dans des endroits \r\nsimples et ordinaires.",
      image: 'le_jardin_de_l_hopital_en_arles.jpg',
    },
    {
      title: "Terrasse du café le soir",
      date: '1888',
      id: 7,
      text: "\"La Terrasse du Caf\u00E9 le Soir\" est un tableau de Vincent van Gogh peint en \r\n1888. Il montre un caf\u00E9 \u00E0 Arles, \u00E9clair\u00E9 par des lanternes sous un ciel \u00E9toil\u00E9. \r\nLes tables et les chaises sont dispos\u00E9es sur la terrasse, et on peut voir des \r\ngens profiter de la soir\u00E9e. Van Gogh a utilis\u00E9 des couleurs chaudes et \r\nlumineuses pour cr\u00E9er une atmosph\u00E8re accueillante et joyeuse. C'est \r\ncomme si on pouvait sentir l'ambiance anim\u00E9e et conviviale du caf\u00E9.",
      image: 'terrasse_du_caffe_le_soir.jpg',
    },
    {
      title: "Le pont de Langlois aux Lavandières",
      date: '1888',
      id: 8,
      text: "\"Le Pont de Langlois aux lavandi\u00E8res\" est un tableau de Vincent van Gogh \r\npeint en 1888. Il montre un joli pont en bois pr\u00E8s de la ville d'Arles, en France. \r\nSur ce pont, il y a des femmes qui lavent leurs v\u00EAtements dans la rivi\u00E8re. \r\nVan Gogh a utilis\u00E9 des couleurs vives, comme le bleu du ciel et le jaune des \r\nchamps, pour rendre la sc\u00E8ne joyeuse et lumineuse. Ce tableau montre un \r\nmoment de la vie quotidienne et comment les gens travaillaient \u00E0 cette \r\n\u00E9poque. C'est comme une fen\u00EAtre sur le pass\u00E9, o\u00F9 on peut voir comment les \r\ngens vivaient et travaillaient ensemble pr\u00E8s de la nature.",
      image: 'le_pont_de_Langlois_aux_Lavandieres.jpeg',
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages.sort((a, b) => a.title.localeCompare(b.title));
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
