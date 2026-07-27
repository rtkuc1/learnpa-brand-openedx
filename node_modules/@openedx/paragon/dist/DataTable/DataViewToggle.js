import React, { useContext, useState } from 'react';
import { GridView, ListView } from '../../icons';
import DataTableContext from './DataTableContext';
import Icon from '../Icon';
import IconButtonToggle from '../IconButtonToggle';
import { IconButtonWithTooltip } from '../IconButton';
export const DATA_VIEW_TOGGLE_VALUES = {
  card: {
    value: 'card',
    alt: 'Card',
    tooltipContent: 'Card view'
  },
  list: {
    value: 'list',
    alt: 'List',
    tooltipContent: 'List view'
  }
};
function DataViewToggle() {
  const {
    dataViewToggleOptions: {
      isDataViewToggleEnabled,
      onDataViewToggle,
      defaultActiveStateValue
    }
  } = useContext(DataTableContext);
  const [activeValue, setActiveValue] = useState(defaultActiveStateValue || 'card');
  if (!isDataViewToggleEnabled) {
    return null;
  }
  const handleOnChange = value => {
    setActiveValue(value);
    if (onDataViewToggle) {
      onDataViewToggle(value);
    }
  };
  const {
    value: cardValue,
    alt: cardAlt,
    tooltipContent: cardTooltip
  } = DATA_VIEW_TOGGLE_VALUES.card;
  const {
    value: listValue,
    alt: listAlt,
    tooltipContent: listTooltip
  } = DATA_VIEW_TOGGLE_VALUES.list;
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    className: "pgn__data-table-dataview-toggle"
  }, /*#__PURE__*/React.createElement(IconButtonToggle, {
    activeValue: activeValue,
    onChange: handleOnChange
  }, /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: cardTooltip,
    value: cardValue,
    src: GridView,
    iconAs: Icon,
    alt: cardAlt
  }), /*#__PURE__*/React.createElement(IconButtonWithTooltip, {
    tooltipContent: listTooltip,
    value: listValue,
    src: ListView,
    iconAs: Icon,
    alt: listAlt
  })));
}
export default DataViewToggle;
//# sourceMappingURL=DataViewToggle.js.map