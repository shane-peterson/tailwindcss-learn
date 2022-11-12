import React, { Component, ReactNode } from 'react';

type Props = {
  products: {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  }[];
};

type ProductTableProps = Props & {
  filterText: string;
  inStockOnly: boolean;
};

type State = {
  [index: string]: string | boolean;
  filterText: string;
  inStockOnly: boolean;
};

type SearchBarProps = {
  filterText: string;
  isStockOnly: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ProductCategoryRowProps = {
  category: string;
};

type ProductRowProps = {
  product: {
    category: string;
    price: string;
    stocked: boolean;
    name: string;
  };
};

class ProductCategoryRow extends Component<ProductCategoryRowProps> {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    );
  }
}

class ProductRow extends Component<ProductRowProps> {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span className="text-red-600">{product.name}</span>
    );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class SearchBar extends Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.onInputChange(e);
  }

  render() {
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;

    return (
      <form className="flex flex-col">
        <input
          name="filterText"
          type="text"
          value={filterText}
          onChange={this.handleInputChange}
          placeholder="Search..."
        />
        <label>
          <input
            name="inStockOnly"
            type="checkbox"
            className="mr-px rounded shadow-none focus:ring-0 focus:ring-offset-0"
            checked={isStockOnly}
            onChange={this.handleInputChange}
          ></input>
          Only show products in stock
        </label>
      </form>
    );
  }
}

class ProductTable extends Component<ProductTableProps> {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows: ReactNode[] = [];
    let lastCategory: string | null = null;

    this.props.products.forEach((product) => {
      if (!product.name.includes(filterText)) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />,
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class FilterableProductTable extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <SearchBar
          isStockOnly={this.state.inStockOnly}
          filterText={this.state.filterText}
          onInputChange={this.handleInputChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
