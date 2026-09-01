import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";
import Card from "../components/Card";

const CARDS = [
  { title: 'Musica',      icon: 'musical-notes', description: 'Escucha tus listas de reproduccion favoritas.' },
  { title: 'Fotos',       icon: 'images',        description: 'Explora y organiza tus recuerdos.' },
  { title: 'Salud',       icon: 'heart',         description: 'Monitorea tus datos de bienestar.' },
  { title: 'Viajes',      icon: 'airplane',      description: 'Planifica y registra tus aventuras.' },
  { title: 'Finanzas',    icon: 'wallet',        description: 'Controla tus gastos e ingresos.' },
  { title: 'Aprendizaje', icon: 'school',        description: 'Accede a cursos y recursos educativos.' },
];

export default function ExploreScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      {CARDS.map(card => (
        <Card
          key={card.title}
          title={card.title}
          icon={card.icon}
          description={card.description}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingBottom: 40 },
});