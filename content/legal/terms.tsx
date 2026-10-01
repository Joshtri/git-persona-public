import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { site } from "@/lib/site";
import { ContactEmail, Operator } from "./shared";

export const title = { en: "Terms of Service", id: "Ketentuan Layanan" };
export const description =
  "The agreement for using GitPersona's desktop app, CLI, website, and Pro plan: licence, plans, prepaid payment in IDR through DOKU, acceptable use, and liability under Indonesian law.";

const days = site.legal.refundDays;

export function TermsEn() {
  return (
    <>
      <Lead>
        These terms are the agreement between you and the seller of GitPersona.
        They cover the GitPersona desktop app, the <code>gitpersona</code> CLI,
        this website, and GitPersona Pro. By downloading, installing, or using
        GitPersona, or by buying Pro, you agree to them.
      </Lead>

      <H2 id="summary">In short</H2>
      <Ul>
        <Li>GitPersona is free for up to 3 profiles. Pro removes that limit for one person on up to 3 devices.</Li>
        <Li>Pro is paid in advance, in Indonesian rupiah, through DOKU. It never renews automatically.</Li>
        <Li>You can get a full refund within {days} days of paying (see the <A href="/refund">Refund Policy</A>).</Li>
        <Li>Your Git identities, keys, and tokens are never sent to us (see the <A href="/privacy">Privacy Policy</A>).</Li>
        <Li>Indonesian law applies, and nothing here takes away your rights as a consumer.</Li>
      </Ul>

      <H2 id="who-we-are">Who we are</H2>
      <P>
        GitPersona is made and sold by <Operator lang="en" />, an individual
        based in Indonesia (&quot;we&quot;, &quot;us&quot;). You can reach us
        at <ContactEmail lang="en" />.
      </P>

      <H2 id="licence">Licence</H2>
      <P>
        GitPersona is licensed to you, not sold. We give you a personal,
        non-exclusive, non-transferable licence to install and use the desktop
        app and the CLI on your own devices, for personal or commercial work.
        You may not:
      </P>
      <Ul>
        <Li>sell, rent, or redistribute GitPersona, or a modified copy of it;</Li>
        <Li>reverse engineer it, except where the law allows; or</Li>
        <Li>get around its profile limit, device limit, or licence checks.</Li>
      </Ul>
      <P>
        GitPersona includes third-party open-source components under their own
        licences. They are listed on the About page in the app.
      </P>

      <H2 id="plans">Free and Pro</H2>
      <Ul>
        <Li>
          <strong>Free</strong> includes every feature for up to 3 profiles, with
          up to 3 pinned repositories per profile. It needs no account and
          doesn&apos;t expire.
        </Li>
        <Li>
          <strong>Pro</strong> gives one person unlimited profiles and pinned
          repositories on up to 3 devices. The desktop app and the CLI on the same computer count as one
          device. If more than 3 devices are signed in to your account, the 3
          that were signed in first keep Pro and the others run on Free. You can
          deactivate a device in <strong>Settings → Account</strong> to free its
          slot, and a device that hasn&apos;t connected for 60 days stops
          counting.
        </Li>
      </Ul>
      <P>
        Current prices are on the <A href="/pricing">Pricing</A> page, and{" "}
        <A href="/docs/account/plans-and-billing">Plans and billing</A> explains
        how plans work in detail. We may change plans, features, or prices for
        future purchases, but a change never shortens Pro you have already paid
        for. We may also give Pro free of charge, for example to students or
        open-source maintainers, for a period we choose.
      </P>

      <H2 id="accounts">Accounts</H2>
      <P>
        You only need an account to start the trial or buy Pro. You sign in
        with a 6-digit code we email to you; there is no password. Keep access
        to that email address, because it is how you sign in and how we find
        your purchases. Anyone using a device that is signed in can use your
        account, so keep your devices secure. An account is for one person:
        don&apos;t share it or use it to get around the device limit.
      </P>

      <H2 id="trial">Pro trial</H2>
      <P>
        The trial gives you Pro for 14 days and needs no payment details. You
        can use it once per account and once per device, and it works on the
        device where you start it. When it ends, you go back to Free
        automatically and nothing is charged.
      </P>

      <H2 id="payment">Payment</H2>
      <Ul>
        <Li>
          Prices are in Indonesian rupiah (IDR), and you see the amount before
          you pay. That amount is the final price: we don&apos;t add tax or any
          other fee on top. Any amounts in US dollars on this website are
          estimates.
        </Li>
        <Li>
          There are two price lists: <strong>Indonesia</strong>, for buyers
          billed in Indonesia, and <strong>International</strong>, for everyone
          else. Choose the one that applies to you at checkout.
        </Li>
        <Li>
          Payments are processed by DOKU on its own payment page. Pro is
          activated once DOKU confirms your payment to us.
        </Li>
        <Li>
          Monthly and Yearly Pro are paid in advance for one month or one year
          and <strong>do not renew automatically</strong>. We never charge you
          again unless you buy again. If you buy again before your current
          period ends, the new period is added to the end of it.
        </Li>
        <Li>
          Founder Lifetime is a limited launch offer, sold only until the date
          shown at checkout. It gives you Pro, with no further payments, for as
          long as we offer GitPersona Pro.
        </Li>
        <Li>
          If you pay with a card or account in another currency, your bank
          converts the amount and may charge a fee. Those charges are between
          you and your bank.
        </Li>
      </Ul>

      <H2 id="refunds">Refunds</H2>
      <P>
        You can get a full refund within {days} days of paying, for any reason.
        The <A href="/refund">Refund Policy</A> explains how to ask for one.
      </P>

      <H2 id="acceptable-use">Acceptable use</H2>
      <P>When you use GitPersona and our servers, please don&apos;t:</P>
      <Ul>
        <Li>try to access other people&apos;s accounts or data;</Li>
        <Li>overload, probe, or disrupt our servers;</Li>
        <Li>tamper with, forge, or share licence checks or plan tokens; or</Li>
        <Li>use GitPersona to impersonate someone else or to break the law.</Li>
      </Ul>

      <H2 id="your-data">Your data and configuration</H2>
      <P>
        When you ask it to, GitPersona changes your Git settings, SSH
        configuration, and saved credentials, as described in the{" "}
        <A href="/docs">documentation</A>. You are responsible for your
        repositories, keys, and backups. The{" "}
        <A href="/privacy">Privacy Policy</A> explains what data we handle and
        what stays on your device.
      </P>

      <H2 id="availability">Availability</H2>
      <P>
        GitPersona&apos;s core features work offline. Sign-in, the trial,
        buying Pro, plan checks, announcements, and updates depend on our
        servers and providers, and may sometimes be unavailable. If GitPersona
        can&apos;t reach our server, Pro keeps working for up to 30 days after
        the last successful plan check. After that, it works like Free until it
        reconnects, and nothing is deleted. GitPersona will change over time as
        we improve it.
      </P>

      <H2 id="termination">Suspension and ending use</H2>
      <P>
        You can stop using GitPersona at any time. Sign out, uninstall it, and,
        if you like, ask us to delete your account as described in the{" "}
        <A href="/privacy#choices">Privacy Policy</A>.
      </P>
      <P>
        If you break these terms, for example by sharing an account, getting
        around licence checks, or abusing our servers, we may sign out or
        deactivate your devices, or move your account back to Free. The Free
        features keep working.
      </P>

      <H2 id="warranty">Disclaimer</H2>
      <P>
        We work hard to make GitPersona reliable, but it is provided &quot;as
        is&quot; and &quot;as available&quot;. To the extent the law allows, we
        don&apos;t promise that it will be free of errors or suit every setup.
      </P>

      <H2 id="liability">Limitation of liability</H2>
      <P>To the extent the law allows:</P>
      <Ul>
        <Li>
          we are not liable for indirect or consequential losses, such as lost
          profits, lost data, or lost work; and
        </Li>
        <Li>
          our total liability to you is limited to the amount you paid us for
          GitPersona in the 12 months before the claim.
        </Li>
      </Ul>
      <P>
        These limits don&apos;t apply where the law doesn&apos;t allow them.
        Nothing in these terms limits your rights under Indonesian consumer
        protection law.
      </P>

      <H2 id="law">Governing law and disputes</H2>
      <P>
        These terms are governed by the laws of the Republic of Indonesia. If
        something goes wrong, contact us first and we will try to resolve it
        with you directly. If we can&apos;t, either of us may use the
        dispute-resolution options available under Indonesian law. These terms
        are published in Indonesian and English; if the two differ, the
        Indonesian version prevails.
      </P>

      <H2 id="changes">Changes to these terms</H2>
      <P>
        We may update these terms. When we do, we will change the date at the
        top of this page and announce significant changes on this website or in
        the app. The updated terms apply from that date.
      </P>

      <H2 id="contact">Contact</H2>
      <P>
        Questions about these terms: <ContactEmail lang="en" />. See also the{" "}
        <A href="/contact">Contact</A> page.
      </P>
    </>
  );
}

export function TermsId() {
  return (
    <>
      <Lead>
        Ketentuan ini adalah perjanjian antara kamu dan penjual GitPersona.
        Ketentuan ini berlaku untuk aplikasi desktop GitPersona, CLI{" "}
        <code>gitpersona</code>, situs web ini, dan GitPersona Pro. Dengan
        mengunduh, memasang, atau menggunakan GitPersona, atau dengan membeli
        Pro, kamu menyetujui ketentuan ini.
      </Lead>

      <H2 id="summary">Ringkasnya</H2>
      <Ul>
        <Li>GitPersona gratis untuk maksimal 3 profil. Pro menghapus batas itu untuk satu orang di maksimal 3 perangkat.</Li>
        <Li>Pro dibayar di muka dalam rupiah melalui DOKU, dan tidak pernah diperpanjang otomatis.</Li>
        <Li>Kamu bisa mendapat pengembalian dana penuh dalam {days} hari sejak membayar (lihat <A href="/refund">Kebijakan Pengembalian Dana</A>).</Li>
        <Li>Identitas Git, key, dan token milikmu tidak pernah dikirim ke kami (lihat <A href="/privacy">Kebijakan Privasi</A>).</Li>
        <Li>Ketentuan ini tunduk pada hukum Indonesia dan tidak mengurangi hakmu sebagai konsumen.</Li>
      </Ul>

      <H2 id="who-we-are">Siapa kami</H2>
      <P>
        GitPersona dibuat dan dijual oleh <Operator lang="id" />, perorangan
        yang berdomisili di Indonesia (&quot;kami&quot;). Kamu bisa menghubungi
        kami di <ContactEmail lang="id" />.
      </P>

      <H2 id="licence">Lisensi</H2>
      <P>
        GitPersona dilisensikan kepadamu, bukan dijual. Kami memberimu lisensi
        pribadi, non-eksklusif, dan tidak dapat dialihkan untuk memasang dan
        memakai aplikasi desktop dan CLI di perangkatmu sendiri, untuk pekerjaan
        pribadi maupun komersial. Kamu tidak boleh:
      </P>
      <Ul>
        <Li>menjual, menyewakan, atau mendistribusikan ulang GitPersona, termasuk salinan yang sudah diubah;</Li>
        <Li>melakukan rekayasa balik, kecuali diizinkan hukum; atau</Li>
        <Li>mengakali batas profil, batas perangkat, atau pemeriksaan lisensinya.</Li>
      </Ul>
      <P>
        GitPersona memuat komponen open source pihak ketiga dengan lisensinya
        masing-masing. Daftarnya ada di halaman About di aplikasi.
      </P>

      <H2 id="plans">Free dan Pro</H2>
      <Ul>
        <Li>
          <strong>Free</strong> berisi semua fitur untuk maksimal 3 profil,
          dengan maksimal 3 repositori dipin per profil. Tidak perlu akun dan
          tidak ada masa berlakunya.
        </Li>
        <Li>
          <strong>Pro</strong> memberi satu orang profil dan repositori dipin
          tanpa batas di maksimal 3 perangkat. Aplikasi desktop dan CLI di komputer yang sama dihitung
          satu perangkat. Jika lebih dari 3 perangkat masuk ke akunmu, 3
          perangkat yang paling dulu masuk tetap mendapat Pro, sedangkan sisanya
          memakai Free. Kamu bisa menonaktifkan perangkat di{" "}
          <strong>Settings → Account</strong> untuk mengosongkan slotnya, dan
          perangkat yang tidak terhubung selama 60 hari tidak lagi dihitung.
        </Li>
      </Ul>
      <P>
        Harga terbaru ada di halaman <A href="/pricing">Harga</A>, dan cara kerja
        paket dijelaskan lengkap di{" "}
        <A href="/docs/account/plans-and-billing">Paket dan tagihan</A>. Kami
        dapat mengubah paket, fitur, atau harga untuk pembelian berikutnya,
        tetapi perubahan tidak pernah memperpendek masa Pro yang sudah kamu
        bayar. Kami juga dapat memberikan Pro secara gratis, misalnya untuk
        pelajar atau pengelola proyek open source, untuk jangka waktu yang kami
        tentukan.
      </P>

      <H2 id="accounts">Akun</H2>
      <P>
        Akun hanya diperlukan untuk memulai trial atau membeli Pro. Kamu masuk
        dengan kode 6 digit yang kami kirim lewat email; tidak ada password.
        Pastikan kamu tetap bisa mengakses email tersebut, karena email itulah
        cara kamu masuk dan cara kami menemukan pembelianmu. Siapa pun yang
        memakai perangkat yang sedang masuk ke akunmu bisa menggunakan akunmu,
        jadi jaga keamanan perangkatmu. Satu akun untuk satu orang: jangan
        membagikannya atau memakainya untuk mengakali batas perangkat.
      </P>

      <H2 id="trial">Trial Pro</H2>
      <P>
        Trial memberimu Pro selama 14 hari tanpa perlu data pembayaran. Trial
        bisa dipakai sekali per akun dan sekali per perangkat, dan berlaku di
        perangkat tempat kamu memulainya. Setelah selesai, kamu otomatis kembali
        ke Free dan tidak ada yang ditagih.
      </P>

      <H2 id="payment">Pembayaran</H2>
      <Ul>
        <Li>
          Harga dalam rupiah (IDR), dan jumlahnya ditampilkan sebelum kamu
          membayar. Jumlah itu adalah harga final: kami tidak menambahkan pajak
          atau biaya lain di atasnya. Jumlah dalam dolar AS di situs ini hanya
          perkiraan.
        </Li>
        <Li>
          Ada dua daftar harga: <strong>Indonesia</strong>, untuk pembeli yang
          ditagih di Indonesia, dan <strong>Internasional</strong>, untuk
          pembeli lainnya. Pilih yang sesuai denganmu saat checkout.
        </Li>
        <Li>
          Pembayaran diproses oleh DOKU di halaman pembayarannya sendiri. Pro
          aktif setelah DOKU mengonfirmasi pembayaranmu kepada kami.
        </Li>
        <Li>
          Pro Bulanan dan Tahunan dibayar di muka untuk satu bulan atau satu
          tahun dan <strong>tidak diperpanjang otomatis</strong>. Kami tidak
          pernah menagihmu lagi kecuali kamu membeli lagi. Jika kamu membeli
          lagi sebelum masa aktifmu habis, masa yang baru ditambahkan di akhir
          masa yang sedang berjalan.
        </Li>
        <Li>
          Founder Lifetime adalah penawaran peluncuran terbatas yang hanya
          dijual sampai tanggal yang tertera saat checkout. Penawaran ini
          memberimu Pro tanpa pembayaran lanjutan selama kami masih menawarkan
          GitPersona Pro.
        </Li>
        <Li>
          Jika kamu membayar dengan kartu atau rekening dalam mata uang lain,
          bankmu akan mengonversi jumlahnya dan mungkin mengenakan biaya. Biaya
          tersebut menjadi urusan antara kamu dan bankmu.
        </Li>
      </Ul>

      <H2 id="refunds">Pengembalian dana</H2>
      <P>
        Kamu bisa mendapat pengembalian dana (refund) penuh dalam {days} hari
        sejak membayar, dengan alasan apa pun. Caranya dijelaskan di{" "}
        <A href="/refund">Kebijakan Pengembalian Dana</A>.
      </P>

      <H2 id="acceptable-use">Aturan penggunaan</H2>
      <P>Saat memakai GitPersona dan server kami, jangan:</P>
      <Ul>
        <Li>mencoba mengakses akun atau data orang lain;</Li>
        <Li>membebani, menguji celah, atau mengganggu server kami;</Li>
        <Li>mengutak-atik, memalsukan, atau membagikan pemeriksaan lisensi atau token paket; atau</Li>
        <Li>memakai GitPersona untuk menyamar sebagai orang lain atau melanggar hukum.</Li>
      </Ul>

      <H2 id="your-data">Data dan konfigurasimu</H2>
      <P>
        Atas permintaanmu, GitPersona mengubah pengaturan Git, konfigurasi SSH,
        dan kredensial tersimpanmu, seperti dijelaskan di{" "}
        <A href="/docs">dokumentasi</A>. Kamu bertanggung jawab atas
        repositori, key, dan cadangan datamu.{" "}
        <A href="/privacy">Kebijakan Privasi</A> menjelaskan data apa yang kami
        tangani dan apa yang tetap di perangkatmu.
      </P>

      <H2 id="availability">Ketersediaan layanan</H2>
      <P>
        Fitur inti GitPersona berjalan offline. Masuk akun, trial, pembelian
        Pro, pemeriksaan paket, pengumuman, dan pembaruan bergantung pada server
        dan penyedia layanan kami, sehingga sesekali bisa tidak tersedia. Jika
        GitPersona tidak bisa menghubungi server kami, Pro tetap berjalan hingga
        30 hari sejak pemeriksaan paket terakhir yang berhasil. Setelah itu,
        GitPersona berjalan seperti Free sampai terhubung kembali, dan tidak ada
        yang dihapus. GitPersona akan terus berubah seiring kami
        mengembangkannya.
      </P>

      <H2 id="termination">Penangguhan dan berhenti menggunakan</H2>
      <P>
        Kamu bisa berhenti memakai GitPersona kapan saja. Keluar dari akunmu,
        hapus aplikasinya, dan jika mau, minta kami menghapus akunmu seperti
        dijelaskan di <A href="/privacy#choices">Kebijakan Privasi</A>.
      </P>
      <P>
        Jika kamu melanggar ketentuan ini, misalnya membagikan akun, mengakali
        pemeriksaan lisensi, atau menyalahgunakan server kami, kami dapat
        mengeluarkan atau menonaktifkan perangkatmu, atau mengembalikan akunmu
        ke Free. Fitur Free tetap berjalan.
      </P>

      <H2 id="warranty">Penafian</H2>
      <P>
        Kami berusaha keras agar GitPersona andal, tetapi GitPersona disediakan
        &quot;sebagaimana adanya&quot; dan &quot;sebagaimana tersedia&quot;.
        Sejauh diizinkan hukum, kami tidak menjamin GitPersona bebas dari
        kesalahan atau cocok untuk setiap konfigurasi.
      </P>

      <H2 id="liability">Batasan tanggung jawab</H2>
      <P>Sejauh diizinkan hukum:</P>
      <Ul>
        <Li>
          kami tidak bertanggung jawab atas kerugian tidak langsung atau
          lanjutan, seperti hilangnya keuntungan, data, atau hasil kerja; dan
        </Li>
        <Li>
          total tanggung jawab kami kepadamu terbatas pada jumlah yang kamu
          bayarkan kepada kami untuk GitPersona dalam 12 bulan sebelum klaim.
        </Li>
      </Ul>
      <P>
        Batasan ini tidak berlaku jika hukum tidak mengizinkannya. Tidak ada
        bagian dari ketentuan ini yang membatasi hakmu berdasarkan hukum
        perlindungan konsumen Indonesia.
      </P>

      <H2 id="law">Hukum yang berlaku dan penyelesaian sengketa</H2>
      <P>
        Ketentuan ini tunduk pada hukum Republik Indonesia. Jika ada masalah,
        hubungi kami terlebih dahulu dan kami akan berusaha menyelesaikannya
        langsung denganmu. Jika tidak berhasil, masing-masing pihak dapat
        menempuh jalur penyelesaian sengketa yang tersedia menurut hukum
        Indonesia. Ketentuan ini diterbitkan dalam bahasa Indonesia dan bahasa
        Inggris; jika keduanya berbeda, versi bahasa Indonesia yang berlaku.
      </P>

      <H2 id="changes">Perubahan ketentuan</H2>
      <P>
        Kami dapat memperbarui ketentuan ini. Jika itu terjadi, kami akan
        mengubah tanggal di bagian atas halaman ini dan mengumumkan perubahan
        penting di situs ini atau di aplikasi. Ketentuan yang diperbarui berlaku
        sejak tanggal tersebut.
      </P>

      <H2 id="contact">Kontak</H2>
      <P>
        Pertanyaan tentang ketentuan ini: <ContactEmail lang="id" />. Lihat
        juga halaman <A href="/contact">Kontak</A>.
      </P>
    </>
  );
}
