import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { ContactEmail, Operator } from "./shared";

export const title = { en: "Contact", id: "Kontak" };
export const description =
  "How to reach GitPersona for support, billing, refunds, and privacy requests.";

export function ContactEn() {
  return (
    <>
      <Lead>
        GitPersona is made, sold, and supported by <Operator lang="en" />, an
        independent developer based in Indonesia.
      </Lead>

      <H2 id="in-app">In the app (fastest)</H2>
      <P>
        Open <strong>Help &amp; Support</strong> in the sidebar (or press{" "}
        <code>F1</code>) and choose <strong>New ticket</strong>. Replies arrive
        right in the app, and you can attach a diagnostics report with one
        click so you don&apos;t have to look up your version or OS. Signing in
        is optional.
      </P>

      <H2 id="email">Email</H2>
      <P>
        <ContactEmail lang="en" /> — if you can&apos;t open the app, or for
        billing, refunds, and privacy requests. GitPersona is run by one person, and every message is read
        and answered personally.
      </P>

      <H2 id="include">What to include</H2>
      <Ul>
        <Li>Your operating system and GitPersona version (shown on the About page in the app, or run <code>gitpersona --version</code>).</Li>
        <Li>What you expected and what happened, with any error message.</Li>
        <Li>For billing and refunds: write from the email you sign in with, and include your invoice number.</Li>
        <Li>For privacy requests: write from the email you sign in with and tell us what you&apos;d like us to do.</Li>
      </Ul>
      <P>
        Please don&apos;t send tokens, passwords, or private keys. We will
        never ask for them.
      </P>

      <H2 id="self-help">Before you write</H2>
      <P>
        The <A href="/docs/support/troubleshooting">Troubleshooting</A> guide
        and <A href="/docs/support/faq">FAQ</A> answer the most common
        questions. Billing questions are covered in{" "}
        <A href="/docs/account/plans-and-billing">Plans and billing</A>.
      </P>

      <H2 id="policies">Policies</H2>
      <P>
        <A href="/terms">Terms of Service</A>,{" "}
        <A href="/privacy">Privacy Policy</A>, and{" "}
        <A href="/refund">Refund Policy</A>.
      </P>
    </>
  );
}

export function ContactId() {
  return (
    <>
      <Lead>
        GitPersona dibuat, dijual, dan didukung oleh <Operator lang="id" />,
        developer independen yang berdomisili di Indonesia.
      </Lead>

      <H2 id="in-app">Lewat aplikasi (paling cepat)</H2>
      <P>
        Buka <strong>Help &amp; Support</strong> di sidebar (atau tekan{" "}
        <code>F1</code>) lalu pilih <strong>New ticket</strong>. Balasan masuk
        langsung di aplikasi, dan kamu bisa melampirkan laporan diagnostik
        dengan sekali klik tanpa perlu mencari versi atau OS-mu. Tidak wajib
        masuk akun.
      </P>

      <H2 id="email">Email</H2>
      <P>
        <ContactEmail lang="id" /> — jika aplikasi tidak bisa dibuka, atau untuk
        tagihan, pengembalian dana, dan permintaan terkait privasi. GitPersona dijalankan oleh satu orang,
        dan setiap pesan dibaca serta dibalas secara langsung.
      </P>

      <H2 id="include">Yang perlu disertakan</H2>
      <Ul>
        <Li>Sistem operasi dan versi GitPersona-mu (tertera di halaman About di aplikasi, atau jalankan <code>gitpersona --version</code>).</Li>
        <Li>Apa yang kamu harapkan dan apa yang terjadi, beserta pesan error jika ada.</Li>
        <Li>Untuk tagihan dan pengembalian dana: kirim dari email yang kamu pakai untuk masuk, dan sertakan nomor invoice.</Li>
        <Li>Untuk permintaan privasi: kirim dari email yang kamu pakai untuk masuk dan jelaskan apa yang ingin kamu minta.</Li>
      </Ul>
      <P>
        Jangan kirim token, password, atau private key. Kami tidak akan pernah
        memintanya.
      </P>

      <H2 id="self-help">Sebelum menulis</H2>
      <P>
        Panduan <A href="/docs/support/troubleshooting">Troubleshooting</A> dan{" "}
        <A href="/docs/support/faq">FAQ</A> menjawab pertanyaan yang paling
        umum. Pertanyaan tagihan dibahas di{" "}
        <A href="/docs/account/plans-and-billing">Paket dan tagihan</A>.
      </P>

      <H2 id="policies">Kebijakan</H2>
      <P>
        <A href="/terms">Ketentuan Layanan</A>,{" "}
        <A href="/privacy">Kebijakan Privasi</A>, dan{" "}
        <A href="/refund">Kebijakan Pengembalian Dana</A>.
      </P>
    </>
  );
}
