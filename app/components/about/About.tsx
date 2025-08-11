import styles from './About.module.css'
import Contributors from './widgets/Contributors'

export default function About() {
  return (
    <div className={styles.content}>
      <div className={styles.description}>
        <h1 className={styles.title}>Çocuklara ve Türk Gençliğine!</h1>
        <p>
          Ulu Önder Gazi Mustafa Kemal ATATÜRK, Türk milletinin bağımsızlık mücadelesine önderlik
          ederek, Türkiye Cumhuriyeti&#39;nin temellerini atan ve modern Türkiye&#39;nin kurucusu
          olan büyük bir liderdir. Onun hayatı; cesaret, vizyon ve özveriyle doludur. Bu proje,
          Atatürk&#39;ün hayatını kronolojik olarak inceleyerek, genç nesillere ilham vermeyi
          amaçlamaktadır.
        </p>

        <h4>Kullanımı</h4>
        <p>
          Sayfanın aşağısında bulunan zaman çizelgesinde Atatürk&#39;ün hayatındaki önemli olayları
          görebilirsiniz. Her bir tarihin üzerine tıklayarak, o tarihteki olaylar hakkında bilgi
          edinebilirsiniz. Ayrıca, harita üzerinden ilgili olayların geliştiği coğrafyayı
          görebilirsiniz.
        </p>

        <p>
          Tarihler arasında geçiş yapmak için klavyenizden (sol ve sağ) yön tuşlarını da
          kullanabilirsiniz.
        </p>

        <h4>Katkıda bulunun</h4>
        <p>
          Projenin kaynak kodları ve verileri herkese açıktır. Siz de Atatürk&#39;ün mirasını
          yaşatmaya yardımcı olabilirsiniz.
        </p>

        <p>
          Projeye katkıda bulunmak için{' '}
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
      </div>
    </div>
  )
}
