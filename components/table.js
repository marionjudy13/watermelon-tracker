import { urlFor } from '../lib/sanity'
import styles from './table.module.scss'

export default function Table(carrot) {
  return (
    <table className={styles.wrapper}>
      <thead>
        <tr>
          <th>Count</th>
          <th>Purchase Date</th>
          <th>Purchase Location</th>
          <th>Brand</th>
          <th>Variety</th>
          <th>Image</th>
          <th>Sweet Scale</th>
          <th>Texture Scale</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {carrot.watermelons.map((watermelon, count) => (
          <tr key={count}>
            <td>{watermelon.count}</td>
            <td>{watermelon.purchased}</td>
            <td>{watermelon.purchaseLocation}</td>
            <td>{watermelon.origin}</td>
            <td>{watermelon.variety}</td>
            {watermelon.image ? (
              <td>
                <img src={urlFor(watermelon.image)} />
              </td>
            ) : (
              <td>
                <span>No Image</span>
              </td>
            )}
            <td>{watermelon.sweetScale}</td>
            <td>{watermelon.textureScale}</td>
            <td>{watermelon.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
