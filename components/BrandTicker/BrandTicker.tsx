'use client'
import Image from 'next/image'
import styles from './BrandTicker.module.css'


type Brand = {
  name: string
  file: string // filename only, e.g. 'loreal.svg' — place files in /public/images/logos/
  scale?: number
}

const rowOne: Brand[] = [
  { name: 'Medicube', file: 'medicube.svg'},
  { name: 'Torriden', file: 'torriden.svg', scale: 2.3},
{ name: 'Blissy', file: 'blissy.svg', scale: 1.4},
{ name: "Vivaia", file: 'vivaia.svg', scale: 3.5},
{name: "Talkspace", file: 'talkspace.svg', scale: 3.2},
{ name: "Lechery", file: 'lechery.svg', scale: 2.3},
{ name: "Peech", file: 'peech.svg', scale: 2.0},
{ name: "Julius AI", file: 'juliusai.svg', scale: 2.9},
{ name: "Derma E", file: 'dermae.svg', scale: 3.3},


]

const rowTwo: Brand[] = [
    { name: 'SSetter', file: 'ssetter.svg', scale: 1.7},
    { name: 'Perplexity AI', file: 'perplexity.svg'},
    { name: "Bloom", file: 'bloom.svg', scale: 2.3},
    { name: "Nongshim", file: 'nongshim.svg', scale: 1.5},
    { name: "Nature's Truth", file: 'naturestruth.svg', scale: 3.3},
    { name: "Real Prize", file: 'realprize.svg', scale: 3.5 },
    { name: "Shavest", file: 'shavest.svg', scale: 3.2},
    { name: "Healthee", file: 'healthee.svg', scale: 3.3},


]
// Duplicate so the loop seam is invisible
const dupeRow = (arr: Brand[]): Brand[] => [...arr, ...arr]
 const BASE_HEIGHT = 26 

export default function BrandTicker() {
  return (
    <section className={styles.section}> 
      {/* Row 1 — scrolls left */}
      <div className={styles.track}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <div className={`${styles.row} ${styles.rowLeft}`}>
          {dupeRow(rowOne).map((brand, i) => (
            <div key={`${brand.name}-${i}`} className={styles.logo}>
              <Image
                src={`/images/logos/${brand.file}`}
                alt={brand.name}
                width={0}
                height={0}
                sizes="200px"
                className={styles.logoImg}   
                style={{ height: `${BASE_HEIGHT * (brand.scale ?? 1)}px` }}           
                />
            </div>
          ))}
        </div>
      </div>
 
      {/* Row 2 — scrolls right */}
      <div className={styles.track}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <div className={`${styles.row} ${styles.rowRight}`}>
          {dupeRow(rowTwo).map((brand, i) => (
            <div key={`${brand.name}-${i}`} className={styles.logo}>
              <Image
                src={`/images/logos/${brand.file}`}
                alt={brand.name}
                width={0}
                height={0}
                sizes="200px"
                className={styles.logoImg}
                style={{ height: `${BASE_HEIGHT * (brand.scale ?? 1)}px` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
 