import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import DataTableContext from './DataTableContext';
import { useRows } from './hooks';
import { selectColumn } from './utils/getVisibleColumns';
import Card, { CardGrid } from '../Card';
function CardItem({
  row,
  prepareRow,
  isSelectable,
  SelectionComponent,
  CardComponent,
  selectionPlacement
}) {
  prepareRow(row);
  const {
    isSelected
  } = row;
  if (isSelectable && SelectionComponent) {
    return /*#__PURE__*/React.createElement("div", {
      className: classNames('pgn__data-table__selectable-card', {
        'is-selected': isSelected,
        'selection-right': selectionPlacement === 'right',
        'selection-left': selectionPlacement !== 'right'
      })
    }, /*#__PURE__*/React.createElement(CardComponent, {
      ...row
    }), /*#__PURE__*/React.createElement(SelectionComponent, {
      row: row
    }));
  }
  return /*#__PURE__*/React.createElement(CardComponent, {
    ...row
  });
}
function DefaultSkeletonCardComponent() {
  return /*#__PURE__*/React.createElement(Card, {
    isLoading: true,
    "data-testid": "default-skeleton-card-component"
  }, /*#__PURE__*/React.createElement(Card.ImageCap, {
    logoSkeleton: true
  }), /*#__PURE__*/React.createElement(Card.Section, {
    className: "pgn__data-table-card-view-default-skeleton-card-section"
  }), /*#__PURE__*/React.createElement(Card.Footer, null));
}
export const DEFAULT_SKELETON_CARD_COUNT = 8;
function CardView({
  columnSizes,
  CardComponent,
  className,
  selectionPlacement,
  SkeletonCardComponent = DefaultSkeletonCardComponent,
  skeletonCardCount
}) {
  const {
    getTableProps,
    prepareRow,
    displayRows
  } = useRows();
  const {
    isSelectable,
    manualSelectColumn,
    isLoading
  } = useContext(DataTableContext);

  // use the same component for card selection that is used for row selection
  // otherwise view switching might break if row selection uses component that supports backend filtering / sorting
  const SelectionComponent = manualSelectColumn?.Cell || selectColumn.Cell;
  if (!getTableProps) {
    return null;
  }
  if (isLoading) {
    return /*#__PURE__*/React.createElement(CardGrid, {
      className: classNames('pgn__data-table-card-view', className),
      columnSizes: columnSizes
    }, [...new Array(skeletonCardCount)].map(() => /*#__PURE__*/React.createElement(SkeletonCardComponent, {
      key: uuidv4()
    })));
  }
  return /*#__PURE__*/React.createElement(CardGrid, {
    className: classNames('pgn__data-table-card-view', className),
    columnSizes: columnSizes
  }, displayRows.map(row => /*#__PURE__*/React.createElement(CardItem, {
    key: row.id,
    CardComponent: CardComponent,
    SelectionComponent: SelectionComponent,
    isSelectable: isSelectable,
    row: row,
    prepareRow: prepareRow,
    selectionPlacement: selectionPlacement
  })));
}
CardItem.defaultProps = {
  SelectionComponent: undefined
};
CardItem.propTypes = {
  row: PropTypes.shape({
    getToggleRowSelectedProps: PropTypes.func,
    isSelected: PropTypes.bool
  }).isRequired,
  prepareRow: PropTypes.func.isRequired,
  isSelectable: PropTypes.bool.isRequired,
  CardComponent: PropTypes.func.isRequired,
  SelectionComponent: PropTypes.func,
  selectionPlacement: PropTypes.oneOf(['right', 'left']).isRequired
};
CardView.defaultProps = {
  columnSizes: {
    xs: 12,
    lg: 6,
    xl: 4
  },
  className: undefined,
  selectionPlacement: 'right',
  SkeletonCardComponent: undefined,
  skeletonCardCount: 8
};
CardView.propTypes = {
  /** The class name for the CardGrid component */
  className: PropTypes.string,
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number
  }),
  /** Your card component must be individualized to your table.
   * It will be called with props from the "row" of data it will display */
  CardComponent: PropTypes.func.isRequired,
  /** If the Cards are selectable this prop determines from which side of the Card to show selection component. */
  selectionPlacement: PropTypes.oneOf(['left', 'right']),
  /** Overrides default skeleton card component for loading state in CardView */
  SkeletonCardComponent: PropTypes.func,
  /** Customize the number of loading skeleton cards to display in CardView */
  skeletonCardCount: PropTypes.number
};
export default CardView;
//# sourceMappingURL=CardView.js.map