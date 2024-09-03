import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiBootstrap, SiTailwindcss } from 'react-icons/si';

const technologies = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#61DAFB' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  
  
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ,
];

export const Stack = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Mi Stack Tecnológico</h2>
      <div style={styles.grid}>
        {technologies.map((tech) => (
          <div key={tech.name} style={styles.techItem}>
            <div style={{ ...styles.icon, color: tech.color }}>
              <tech.icon />
            </div>
            <span style={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f3f4f6',
    padding: '48px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    // fontSize: '28px',
    // fontWeight: 'bold',
    // color: '#1f2937',
    textAlign: 'center',
    marginBottom: '32px',
    fontSize: "22px",
    textTransform: "uppercase",
    color: "#111135",
    textDecoration: "underline",
    textDecorationColor: "#d3d3d3",
    textDecorationThickness: "5px"
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '32px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  techItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '48px',
    marginBottom: '8px',
  },
  techName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#4b5563',
  },
};