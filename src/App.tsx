import { CheckBox } from "./components/forms/checkbox"
import { Input } from "./components/forms/input"
import { ProductCategoryRow } from "./components/products/productCategoryRow"
import { ProductRow } from "./components/products/productRow"
import { ProductType } from "./types/specialeType"

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


function App() {
  return <div className="container my-3">
    <SearchBar />
    <ProductTable products={PRODUCTS} />
  </div>
}

function SearchBar() {
  return <div>
    <div className="mb-3">
      <Input value="" onChange={() => null} placeholder="Search ..." />
      <CheckBox checked={false} onChange={() => null} label="Show only products in stock" id="stocked" />
    </div>
  </div>
}

function ProductTable({ products }: { products: ProductType[] }) {

  const rows = []
  let lastCategory = null


  for (let product of products) {
    if (product.category != lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />)
  }


  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}


export default App
