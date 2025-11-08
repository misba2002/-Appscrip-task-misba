import { useState } from "react";
import styles from "../styles/sidebar.module.css";
import { FiSquare, FiCheckSquare, FiChevronDown, FiChevronUp } from "react-icons/fi";

const filterOptions = {
  idealFor: ["All", "Men", "Women", "Kids", "Unisex"],
  occasion: ["All", "Casual", "Formal", "Party", "Wedding", "Business"],
  work: ["All", "Office", "Remote", "Construction", "Healthcare"],
  fabric: ["All", "Cotton", "Polyester", "Silk", "Wool", "Linen"],
  segment: ["All", "Premium", "Standard", "Economy"],
  suitableFor: ["All", "Summer", "Winter", "All Season"],
  rawMaterials: ["All", "Organic", "Synthetic", "Mixed"],
  pattern: ["All", "Solid", "Striped", "Printed", "Embroidered"]
};

type SideBarProps = {
  isVisible: boolean;
};

const SideBar = ({ isVisible }: SideBarProps) => {
  const [expandedFilters, setExpandedFilters] = useState<{ [key: string]: boolean }>({});
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string[] }>({});

  const toggleFilter = (key: string) => {
    setExpandedFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleOption = (filterKey: string, option: string) => {
    setSelectedOptions(prev => {
      const current = prev[filterKey] || [];
      if (current.includes(option)) {
        return { ...prev, [filterKey]: current.filter(o => o !== option) };
      } else {
        return { ...prev, [filterKey]: [...current, option] };
      }
    });
  };

  const clearAll = (filterKey: string) => {
    setSelectedOptions(prev => ({ ...prev, [filterKey]: [] }));
  };

  if (!isVisible) return null;

  return (
    <aside className={styles.sideFilterBar}>
      {Object.entries(filterOptions).map(([key, options]) => {
        const firstOption = options[0]; // "All"
        const otherOptions = options.slice(1);

        return (
          <div key={key} className={styles.filterItem}>
            {/* Header */}
            <div className={styles.filterHeader}>
              <p>{key.toUpperCase()}</p>
              {otherOptions.length > 0 && (
                <span onClick={() => toggleFilter(key)}>
                  {expandedFilters[key] ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              )}
            </div>

            <ul className={styles.filterOptionsList}>
              {/* Always visible "All" option (no checkbox) */}
              <li className={styles.optionItem}>
                <span>{firstOption}</span>
              </li>

              {/* "Clear All" button */}
              {expandedFilters[key] && otherOptions.length > 0 && (
                <li
                  className={`${styles.optionItem} ${styles.clearAll}`}
                  onClick={() => clearAll(key)}
                >
                  Clear All
                </li>
              )}

              {/* Collapsible options with checkbox */}
              {expandedFilters[key] &&
                otherOptions.map(option => (
                  <li
                    key={option}
                    className={styles.optionItem}
                    onClick={() => toggleOption(key, option)}
                  >
                    {selectedOptions[key]?.includes(option) ? <FiCheckSquare /> : <FiSquare />}
                    <span>{option}</span>
                  </li>
                ))}
            </ul>
          </div>
        );
      })}
    </aside>
  );
};

export default SideBar;
