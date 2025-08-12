import styles from './About.module.css'
import Contributors from './widgets/Contributors'

export default function About() {
  return (
    <div className={styles.content}>
      <div className={styles.description}>
        <h1 className={styles.title}>Çocuklara ve Türk Gençliğine!</h1>
        <p>
          Ulu Önder Gazi Mustafa Kemal Atatürk, Türk milletinin bağımsızlık mücadelesine önderlik
          ederek Türkiye Cumhuriyeti&apos;nin kurucusu olmuştur.
        </p>
        <p>
          Bu projenin amacı, Atatürk&apos;ün cesaret, vizyon ve özveriyle dolu olan hayatını
          kronolojik olarak anlatıp gençlere ilham vermektir.
        </p>

        <h4>Kullanımı</h4>
        <p>
          Sayfanın altındaki zaman çizelgesinde Atatürk&apos;ün hayatındaki önemli olayları
          görebilirsiniz. Tarihlere tıklayarak olay detaylarını ve haritada ilgili bölgeleri
          inceleyebilirsiniz. Klavyenizdeki yön tuşlarıyla tarihler arasında geçiş yapabilirsiniz.
        </p>

        <h4>Katkıda bulunun</h4>
        <p>
          Projenin kaynak kodları ve verileri herkese açıktır. Katkıda bulunmak için{' '}
          <a href='https://github.com/gayret/ataturk/blob/main/app/data/data.json' target='_blank'>
            GitHub&#39;a
          </a>{' '}
          göz atabilirsiniz.
        </p>

        <Contributors />

        <h4>Teşekkür</h4>
        <small>
          Projeyi hayata geçirmem için yardımcı olan biricik karım İrem Çiftler Gayret&apos;e
          teşekkür ederim.
        </small>

        <br />

        <a href='https://www.buymeacoffee.com/safagayret'>
          <img src='https://img.buymeacoffee.com/button-api/?text=Bağış yap&emoji=🤝&slug=safagayret&button_colour=e30a17&font_colour=ffffff&font_family=Arial&outline_colour=ffffff&coffee_colour=FFDD00' />
        </a>
      </div>
    </div>
  )
}
