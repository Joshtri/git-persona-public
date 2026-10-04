import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { ContactEmail, Operator } from "./shared";

export const title = { en: "Privacy Policy", id: "Kebijakan Privasi" };
export const description =
  "What GitPersona collects, why, who processes it, how long we keep it, and your rights under Indonesia's Personal Data Protection Law. Your Git identities, keys, and tokens are never sent to us.";

export function PrivacyEn() {
  return (
    <>
      <Lead>
        This policy explains what personal data GitPersona collects, why, who
        else handles it, and the choices you have. It covers the desktop app,
        the <code>gitpersona</code> CLI, this website, and the GitPersona
        server. GitPersona is run by <Operator lang="en" />, an individual based
        in Indonesia (&quot;we&quot;), who is responsible for this data.
      </Lead>

      <H2 id="summary">In short</H2>
      <Ul>
        <Li>Your Git identities, SSH keys, tokens, and repository data stay on your device. We never receive them.</Li>
        <Li>The app and the CLI have no analytics, telemetry, or crash reporting.</Li>
        <Li>You only need an account for the Pro trial or to buy Pro. We then keep your email address, your plan, and a short record of each device you sign in on.</Li>
        <Li>We don&apos;t sell your data, show ads, or send marketing email.</Li>
      </Ul>

      <H2 id="on-device">Data that stays on your device</H2>
      <P>
        Your profiles (name, email, and signing key reference), tracked
        repositories and their assignments, rules, SSH key and credential
        details, settings, and the activity log are saved in GitPersona&apos;s
        data folder on your computer. HTTPS tokens and your sign-in session are
        kept in your operating system&apos;s credential store (Windows
        Credential Manager, the macOS Keychain, or Secret Service on Linux).
        None of this is sent to us.
      </P>

      <H2 id="third-parties">Requests to GitHub and GitLab</H2>
      <P>
        A few features talk directly to GitHub or GitLab, not to us. They
        handle these requests under their own privacy policies.
      </P>
      <Ul>
        <Li>
          <strong>Token checks</strong> — when you add or change an HTTPS token
          for github.com or gitlab.com, and when the app starts if a
          token&apos;s expiry date isn&apos;t known yet, the app sends that
          token straight to the service that issued it, to confirm it works and
          find out when it expires.
        </Li>
        <Li>
          <strong>Downloads and updates</strong> — installers and app updates
          are downloaded from GitHub, where our releases are published.
        </Li>
        <Li>
          <strong>CLI update check</strong> — about once a day, the CLI asks
          GitHub&apos;s public API for the latest version number.
        </Li>
      </Ul>

      <H2 id="server">Data our server receives</H2>
      <Ul>
        <Li>
          <strong>Update and announcement checks</strong> — when the desktop app
          checks for updates, announcements, and feature settings, it sends the
          app version and release channel, and the update check also sends your
          operating system and processor type. These requests carry no account
          or device identifier.
        </Li>
        <Li>
          <strong>Download clicks on this website</strong> — the platform,
          version, and button you clicked; the country our host works out from
          your IP address; and a salted hash of your IP address and browser
          identifier that changes every day and is used only to avoid counting
          the same download twice. Your IP address itself is not stored.
        </Li>
        <Li>
          <strong>If you sign in</strong> — your email address; one-time sign-in
          codes, stored as hashes and deleted within an hour, together with a
          hash of your IP address to limit repeated attempts; your session,
          stored as a hash; your plan, paid-through date, and trial dates; and
          when you created your account and last signed in. For each device you
          sign in on, we also keep a one-way hash of the computer&apos;s machine
          ID (the ID itself never leaves your computer), the computer&apos;s
          name, its operating system, the GitPersona version, and when it was
          activated and last seen. The app sends these device details whenever
          it checks your plan: at startup, every 12 hours while it runs, and
          when you open <strong>Settings → Account</strong>.
        </Li>
        <Li>
          <strong>If you buy Pro</strong> — to create the payment, we send DOKU
          your email address, the invoice number, and the amount. We keep the
          order (plan, price list, amount, invoice number, status, payment date,
          and which part of the app you started from) and the payment
          notifications DOKU sends us. You enter your payment details on
          DOKU&apos;s page; we never see your full card number.
        </Li>
        <Li>
          <strong>If you open a support ticket</strong> — the category, subject,
          and messages you write; your app version, operating system, and
          release channel; a random support ID the app creates for you, stored
          as a hash, so only your app can read the replies; and a hash of your
          IP address to limit spam. If you are signed in, the ticket is also
          linked to your account, email address, and plan. A diagnostics report
          is attached only while <strong>Attach diagnostics</strong> is on;
          you can preview it or switch it off before sending. It lists your
          app, OS, and Git versions, your plan, how many profiles,
          repositories, rules, SSH keys, and credentials you have, and recent
          log lines, with email addresses masked, your home folder replaced by{" "}
          <code>~</code>, and tokens removed.
        </Li>
        <Li>
          <strong>If you email us</strong> — your email address and your
          message, so we can answer you.
        </Li>
      </Ul>

      <H2 id="use">How and why we use it</H2>
      <Ul>
        <Li>
          To provide what you ask for: sign-in, the trial, Pro, the device
          limit, purchases, and refunds. This is needed to carry out our
          agreement with you.
        </Li>
        <Li>To keep the records that tax and accounting law requires.</Li>
        <Li>
          To prevent abuse, such as repeated trials or too many sign-in
          attempts, and to count downloads anonymously. These are our
          legitimate interests in running the service.
        </Li>
        <Li>To deliver updates and to answer your messages.</Li>
      </Ul>
      <P>
        The only emails we send are sign-in codes and replies to messages you
        send us.
      </P>

      <H2 id="providers">Service providers</H2>
      <P>We rely on these providers, each only for its part of the service:</P>
      <Ul>
        <Li><strong>Vercel</strong> — hosts our server.</Li>
        <Li><strong>MongoDB Atlas</strong> — stores the server data described above.</Li>
        <Li><strong>Resend</strong> — delivers sign-in code emails.</Li>
        <Li><strong>DOKU</strong> — processes payments.</Li>
        <Li><strong>GitHub</strong> — hosts our downloads and updates.</Li>
      </Ul>
      <P>
        Some of these providers store or process data outside Indonesia. The
        providers that host this website and our server may also keep standard
        technical logs, such as IP addresses, for security and reliability.
      </P>

      <H2 id="website">This website</H2>
      <P>
        This website uses no analytics or advertising cookies. It saves your
        theme, language, and price-list choices in your browser&apos;s local
        storage so they&apos;re remembered next time, and records download
        clicks as described above.
      </P>

      <H2 id="security">Security</H2>
      <P>
        We store sign-in codes, sessions, and IP addresses only as salted
        hashes, sign plan tokens so they can&apos;t be forged, and connect to
        our server over HTTPS. No system is perfectly secure. If a breach
        affects your personal data, we will notify you as the law requires.
      </P>

      <H2 id="retention">How long we keep it</H2>
      <Ul>
        <Li>Sign-in codes, and the IP hash stored with them, are deleted within an hour.</Li>
        <Li>A session ends when you sign out, when the device is deactivated, or after 180 days without use.</Li>
        <Li>Account, plan, and device data are kept while your account exists.</Li>
        <Li>The hashed ID of a device that has used the trial is kept so the trial can&apos;t be repeated on that device.</Li>
        <Li>Order records are kept for as long as accounting and tax law requires.</Li>
        <Li>Download records are kept as anonymous download statistics.</Li>
        <Li>Emails and support tickets are kept as long as we need them to help you, and deleted on request.</Li>
      </Ul>

      <H2 id="choices">Your choices and rights</H2>
      <P>
        You can use GitPersona without an account. If you have one, you can
        sign out and deactivate devices yourself in{" "}
        <strong>Settings → Account</strong>.
      </P>
      <P>
        Under Indonesia&apos;s Personal Data Protection Law (Law No. 27 of 2022,
        &quot;UU PDP&quot;), you can ask us to:
      </P>
      <Ul>
        <Li>tell you what personal data we hold about you and give you a copy;</Li>
        <Li>correct data that is wrong or incomplete;</Li>
        <Li>delete your data, or stop or limit how we use it.</Li>
      </Ul>
      <P>
        Email <ContactEmail lang="en" /> from the address you sign in with, so
        we can confirm the request comes from you. There is no delete button in
        the app; we delete accounts on request. When we do, we keep the order
        records the law requires and the trial record described above.
      </P>

      <H2 id="children">Children</H2>
      <P>
        GitPersona is a tool for software developers and isn&apos;t directed at
        children.
      </P>

      <H2 id="changes">Changes to this policy</H2>
      <P>
        When this policy changes, we will update the date at the top of this
        page and announce significant changes on this website or in the app.
      </P>

      <H2 id="contact">Contact</H2>
      <P>
        Questions or requests about privacy: <ContactEmail lang="en" />. See
        also our <A href="/terms">Terms of Service</A>.
      </P>
    </>
  );
}

export function PrivacyId() {
  return (
    <>
      <Lead>
        Kebijakan ini menjelaskan data pribadi apa yang dikumpulkan GitPersona,
        untuk apa, siapa lagi yang menanganinya, dan pilihan yang kamu miliki.
        Kebijakan ini berlaku untuk aplikasi desktop, CLI{" "}
        <code>gitpersona</code>, situs web ini, dan server GitPersona.
        GitPersona dijalankan oleh <Operator lang="id" />, perorangan yang
        berdomisili di Indonesia (&quot;kami&quot;), yang bertanggung jawab atas
        data ini.
      </Lead>

      <H2 id="summary">Ringkasnya</H2>
      <Ul>
        <Li>Identitas Git, SSH key, token, dan data repositorimu tetap di perangkatmu. Kami tidak pernah menerimanya.</Li>
        <Li>Aplikasi dan CLI tidak memakai analitik, telemetri, atau pelaporan crash.</Li>
        <Li>Akun hanya diperlukan untuk trial Pro atau membeli Pro. Jika kamu punya akun, kami menyimpan alamat email, paket, dan catatan singkat tentang setiap perangkat tempat kamu masuk.</Li>
        <Li>Kami tidak menjual datamu, tidak menampilkan iklan, dan tidak mengirim email pemasaran.</Li>
      </Ul>

      <H2 id="on-device">Data yang tetap di perangkatmu</H2>
      <P>
        Profilmu (nama, email, dan referensi signing key), repositori yang
        dilacak beserta penugasannya, aturan, detail SSH key dan kredensial,
        pengaturan, serta log aktivitas disimpan di folder data GitPersona di
        komputermu. Token HTTPS dan sesi masukmu disimpan di penyimpanan
        kredensial sistem operasimu (Windows Credential Manager, Keychain di
        macOS, atau Secret Service di Linux). Tidak ada satu pun yang dikirim ke
        kami.
      </P>

      <H2 id="third-parties">Permintaan ke GitHub dan GitLab</H2>
      <P>
        Beberapa fitur berkomunikasi langsung dengan GitHub atau GitLab, bukan
        dengan kami. Mereka menangani permintaan ini sesuai kebijakan privasi
        masing-masing.
      </P>
      <Ul>
        <Li>
          <strong>Pemeriksaan token</strong> — saat kamu menambah atau mengubah
          token HTTPS untuk github.com atau gitlab.com, dan saat aplikasi
          dibuka jika tanggal kedaluwarsa token belum diketahui, aplikasi
          mengirim token itu langsung ke layanan yang menerbitkannya untuk
          memastikan token berfungsi dan mengetahui kapan token kedaluwarsa.
        </Li>
        <Li>
          <strong>Unduhan dan pembaruan</strong> — installer dan pembaruan
          aplikasi diunduh dari GitHub, tempat rilis kami diterbitkan.
        </Li>
        <Li>
          <strong>Pemeriksaan pembaruan CLI</strong> — sekitar sekali sehari,
          CLI menanyakan nomor versi terbaru ke API publik GitHub.
        </Li>
      </Ul>

      <H2 id="server">Data yang diterima server kami</H2>
      <Ul>
        <Li>
          <strong>Pemeriksaan pembaruan dan pengumuman</strong> — saat aplikasi
          desktop memeriksa pembaruan, pengumuman, dan pengaturan fitur,
          aplikasi mengirim versi aplikasi dan kanal rilis, dan pemeriksaan
          pembaruan juga mengirim sistem operasi dan jenis prosesormu.
          Permintaan ini tidak membawa pengenal akun maupun perangkat.
        </Li>
        <Li>
          <strong>Klik unduhan di situs ini</strong> — platform, versi, dan
          tombol yang kamu klik; negara yang ditentukan penyedia hosting kami
          dari alamat IP-mu; dan hash bergaram (salted hash) dari alamat IP dan
          identitas browsermu yang berganti setiap hari dan hanya dipakai agar
          unduhan yang sama tidak terhitung dua kali. Alamat IP-mu sendiri tidak
          disimpan.
        </Li>
        <Li>
          <strong>Jika kamu masuk</strong> — alamat email; kode masuk sekali
          pakai, disimpan dalam bentuk hash dan dihapus dalam satu jam, beserta
          hash alamat IP-mu untuk membatasi percobaan berulang; sesimu, disimpan
          dalam bentuk hash; paket, tanggal akhir masa aktif, dan tanggal trial;
          serta kapan akunmu dibuat dan terakhir kali kamu masuk. Untuk setiap
          perangkat tempat kamu masuk, kami juga menyimpan hash satu arah dari
          ID mesin komputer (ID aslinya tidak pernah keluar dari komputermu),
          nama komputer, sistem operasi, versi GitPersona, serta kapan perangkat
          diaktifkan dan terakhir terlihat. Aplikasi mengirim detail perangkat
          ini setiap kali memeriksa paketmu: saat dibuka, setiap 12 jam selama
          berjalan, dan saat kamu membuka <strong>Settings → Account</strong>.
        </Li>
        <Li>
          <strong>Jika kamu membeli Pro</strong> — untuk membuat pembayaran,
          kami mengirim alamat email, nomor invoice, dan jumlah tagihan ke DOKU.
          Kami menyimpan data pesanan (paket, daftar harga, jumlah, nomor
          invoice, status, tanggal pembayaran, dan bagian aplikasi tempat kamu
          memulai pembelian) serta notifikasi pembayaran yang dikirim DOKU.
          Data pembayaran kamu masukkan di halaman DOKU; kami tidak pernah
          melihat nomor kartumu secara lengkap.
        </Li>
        <Li>
          <strong>Jika kamu membuka tiket bantuan</strong> — kategori, judul,
          dan pesan yang kamu tulis; versi aplikasi, sistem operasi, dan kanal
          rilis; ID bantuan acak yang dibuat aplikasi untukmu, disimpan dalam
          bentuk hash, sehingga hanya aplikasimu yang bisa membaca balasannya;
          dan hash alamat IP-mu untuk membatasi spam. Jika kamu sedang masuk,
          tiket juga ditautkan ke akun, alamat email, dan paketmu. Laporan
          diagnostik hanya dilampirkan selama <strong>Attach diagnostics</strong>{" "}
          aktif; kamu bisa melihatnya dulu atau mematikannya sebelum mengirim.
          Isinya versi aplikasi, OS, dan Git, paketmu, jumlah profil,
          repositori, aturan, SSH key, dan kredensial, serta baris log terbaru,
          dengan alamat email disamarkan, folder home diganti <code>~</code>,
          dan token dihapus.
        </Li>
        <Li>
          <strong>Jika kamu mengirim email ke kami</strong> — alamat email dan
          isi pesanmu, agar kami bisa membalasnya.
        </Li>
      </Ul>

      <H2 id="use">Cara dan alasan kami menggunakannya</H2>
      <Ul>
        <Li>
          Untuk menyediakan yang kamu minta: masuk akun, trial, Pro, batas
          perangkat, pembelian, dan pengembalian dana. Ini diperlukan untuk
          menjalankan perjanjian kami denganmu.
        </Li>
        <Li>Untuk menyimpan catatan yang diwajibkan aturan perpajakan dan akuntansi.</Li>
        <Li>
          Untuk mencegah penyalahgunaan, seperti trial berulang atau terlalu
          banyak percobaan masuk, dan untuk menghitung unduhan secara anonim.
          Ini adalah kepentingan sah kami dalam menjalankan layanan.
        </Li>
        <Li>Untuk mengirim pembaruan dan membalas pesanmu.</Li>
      </Ul>
      <P>
        Email yang kami kirim hanya kode masuk dan balasan atas pesan yang kamu
        kirim.
      </P>

      <H2 id="providers">Penyedia layanan</H2>
      <P>Kami menggunakan penyedia berikut, masing-masing hanya untuk bagian layanannya:</P>
      <Ul>
        <Li><strong>Vercel</strong> — hosting server kami.</Li>
        <Li><strong>MongoDB Atlas</strong> — menyimpan data server yang dijelaskan di atas.</Li>
        <Li><strong>Resend</strong> — mengirim email kode masuk.</Li>
        <Li><strong>DOKU</strong> — memproses pembayaran.</Li>
        <Li><strong>GitHub</strong> — hosting unduhan dan pembaruan.</Li>
      </Ul>
      <P>
        Sebagian penyedia ini menyimpan atau memproses data di luar Indonesia.
        Penyedia yang meng-hosting situs ini dan server kami juga dapat
        menyimpan log teknis standar, seperti alamat IP, untuk keamanan dan
        keandalan.
      </P>

      <H2 id="website">Situs web ini</H2>
      <P>
        Situs ini tidak memakai cookie analitik atau iklan. Situs menyimpan
        pilihan tema, bahasa, dan daftar harga di local storage browsermu agar
        diingat pada kunjungan berikutnya, dan mencatat klik unduhan seperti
        dijelaskan di atas.
      </P>

      <H2 id="security">Keamanan</H2>
      <P>
        Kami hanya menyimpan kode masuk, sesi, dan alamat IP dalam bentuk hash
        bergaram, menandatangani token paket agar tidak bisa dipalsukan, dan
        terhubung ke server kami melalui HTTPS. Tidak ada sistem yang aman
        sepenuhnya. Jika terjadi kebocoran yang memengaruhi data pribadimu, kami
        akan memberitahumu sesuai ketentuan hukum.
      </P>

      <H2 id="retention">Berapa lama kami menyimpannya</H2>
      <Ul>
        <Li>Kode masuk, beserta hash IP yang disimpan bersamanya, dihapus dalam satu jam.</Li>
        <Li>Sesi berakhir saat kamu keluar, saat perangkat dinonaktifkan, atau setelah 180 hari tidak dipakai.</Li>
        <Li>Data akun, paket, dan perangkat disimpan selama akunmu ada.</Li>
        <Li>Hash ID perangkat yang sudah memakai trial disimpan agar trial tidak bisa diulang di perangkat itu.</Li>
        <Li>Catatan pesanan disimpan selama diwajibkan aturan akuntansi dan perpajakan.</Li>
        <Li>Catatan unduhan disimpan sebagai statistik unduhan anonim.</Li>
        <Li>Email dan tiket bantuan disimpan selama kami membutuhkannya untuk membantumu, dan dihapus atas permintaan.</Li>
      </Ul>

      <H2 id="choices">Pilihan dan hakmu</H2>
      <P>
        Kamu bisa memakai GitPersona tanpa akun. Jika punya akun, kamu bisa
        keluar dan menonaktifkan perangkat sendiri di{" "}
        <strong>Settings → Account</strong>.
      </P>
      <P>
        Berdasarkan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data
        Pribadi (&quot;UU PDP&quot;), kamu bisa meminta kami untuk:
      </P>
      <Ul>
        <Li>memberi tahu data pribadi apa yang kami simpan tentangmu dan memberimu salinannya;</Li>
        <Li>memperbaiki data yang salah atau tidak lengkap;</Li>
        <Li>menghapus datamu, atau menghentikan maupun membatasi penggunaannya.</Li>
      </Ul>
      <P>
        Kirim email ke <ContactEmail lang="id" /> dari alamat yang kamu pakai
        untuk masuk, agar kami bisa memastikan permintaan itu benar darimu.
        Tidak ada tombol hapus akun di aplikasi; kami menghapus akun atas
        permintaan. Saat menghapusnya, kami tetap menyimpan catatan pesanan yang
        diwajibkan hukum dan catatan trial yang dijelaskan di atas.
      </P>

      <H2 id="children">Anak-anak</H2>
      <P>
        GitPersona adalah alat untuk developer perangkat lunak dan tidak
        ditujukan untuk anak-anak.
      </P>

      <H2 id="changes">Perubahan kebijakan ini</H2>
      <P>
        Saat kebijakan ini berubah, kami akan memperbarui tanggal di bagian atas
        halaman ini dan mengumumkan perubahan penting di situs ini atau di
        aplikasi.
      </P>

      <H2 id="contact">Kontak</H2>
      <P>
        Pertanyaan atau permintaan terkait privasi: <ContactEmail lang="id" />.
        Lihat juga <A href="/terms">Ketentuan Layanan</A> kami.
      </P>
    </>
  );
}
