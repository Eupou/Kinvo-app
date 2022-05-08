import SidebarItem from "./SidebarItem";

import puzzle from "../../assets/puzzle.svg";
import circle from "../../assets/circle.svg";
import piechart from "../../assets/piechart.svg";
import dollarsign from "../../assets/dollarsign.svg";
import diamond from "../../assets/diamond.svg";
import projectionchart from "../../assets/projectionchart.svg";
import riskreturn from "../../assets/riskreturn.svg";
import padlock from "../../assets/padlock.svg";

import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: circle,
      name: "Resumo da Carteira",
      options: ["item 1", "item 2", "item 3"],
    },
    {
      icon: piechart,
      name: "Meus Produtos",
      options: ["item 1", "item 2", "item 3"],
    },
    {
      icon: dollarsign,
      name: "Meus Proventos",
      options: ["item 1", "item 2", "item 3"],
    },
    {
      icon: puzzle,
      name: "Classe de Ativos",
      options: ["Ação", "Fundo", "Fundo Imobiliário", "FUndo Renda Fixa"],
    },
    {
      icon: diamond,
      name: "Rentabilidade Real",
      options: ["item 1", "item 2", "item 3"],
    },
    {
      icon: projectionchart,
      name: "Projeção da Carteira",
      options: ["item 1", "item 2", "item 3"],
    },
    {
      icon: riskreturn,
      name: "Risco x Retorno",
      options: ["item 1", "item 2", "item 3"],
    },
    {
      icon: padlock,
      name: "Cobertura do FGC",
      options: ["item 1", "item 2", "item 3"],
    },
  ];

  return (
    <div className={styles.containerSidebar}>
      {sidebarItems.map((item, id) => (
        <SidebarItem
          icon={item.icon}
          text={item.name}
          key={id}
          options={item.options}
        />
      ))}
    </div>
  );
};

export default Sidebar;
