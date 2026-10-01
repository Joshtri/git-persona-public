import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { site } from "@/lib/site";
import { ContactEmail } from "./shared";

const days = site.legal.refundDays;

export const title = { en: "Refund Policy", id: "Kebijakan Pengembalian Dana" };
export const description = `A full refund within ${days} days of buying GitPersona Pro, for any reason. What's covered, how to ask, and what happens next.`;

export function RefundEn() {
  return (
    <>
      <Lead>
        If GitPersona Pro isn&apos;t right for you, you can get a full refund
        within {days} days of paying, for any reason.
      </Lead>

      <H2 id="eligible">What&apos;s covered</H2>
      <Ul>
        <Li>Pro Monthly, Pro Yearly, and Founder Lifetime purchases.</Li>
        <Li>Requests made within {days} days of the payment date.</Li>
        <Li>The full amount you paid, in Indonesian rupiah (IDR).</Li>
      </Ul>
      <P>
        After {days} days, purchases can&apos;t be refunded, unless the law
        requires otherwise. The 14-day trial lets you try Pro before you pay,
        and Pro never renews automatically, so you won&apos;t be charged
        unexpectedly. The trial and free Pro grants involve no payment, so
        there is nothing to refund.
      </P>

      <H2 id="how">How to ask for a refund</H2>
      <P>
        Email <ContactEmail lang="en" /> from the address you use to sign in to
        GitPersona. Include the invoice number from your payment receipt if you
        have it. You don&apos;t need to give a reason.
      </P>

      <H2 id="after">What happens next</H2>
      <Ul>
        <Li>
          We confirm the refund by email and send it back through our payment
          provider, DOKU, to the payment method you used. If that method
          can&apos;t receive refunds, we&apos;ll agree another way with you,
          such as a bank transfer.
        </Li>
        <Li>How long the money takes to arrive depends on your payment method and bank.</Li>
        <Li>If you paid in another currency, the amount you get back may differ slightly because of your bank&apos;s exchange rate.</Li>
        <Li>
          Your account returns to Free once the refund is issued. Nothing is
          deleted: your profiles follow the usual{" "}
          <A href="/docs/account/plans-and-billing#when-pro-ends">rules for when Pro ends</A>.
        </Li>
      </Ul>

      <H2 id="chargebacks">Before filing a chargeback</H2>
      <P>
        Please contact us first. Within {days} days, a refund from us is faster
        and simpler than a dispute through your bank.
      </P>

      <P>
        This policy is part of our <A href="/terms">Terms of Service</A>.
      </P>
    </>
  );
}

export function RefundId() {
  return (
    <>
      <Lead>
        Jika GitPersona Pro tidak cocok untukmu, kamu bisa mendapat pengembalian
        dana (refund) penuh dalam {days} hari sejak membayar, dengan alasan apa
        pun.
      </Lead>

      <H2 id="eligible">Yang berlaku</H2>
      <Ul>
        <Li>Pembelian Pro Bulanan, Pro Tahunan, dan Founder Lifetime.</Li>
        <Li>Permintaan yang diajukan dalam {days} hari sejak tanggal pembayaran.</Li>
        <Li>Seluruh jumlah yang kamu bayar, dalam rupiah (IDR).</Li>
      </Ul>
      <P>
        Setelah {days} hari, pembelian tidak dapat dikembalikan dananya, kecuali
        diwajibkan oleh hukum. Trial 14 hari memungkinkanmu mencoba Pro sebelum
        membayar, dan Pro tidak pernah diperpanjang otomatis, jadi tidak ada
        tagihan yang tak terduga. Trial dan Pro gratis dari program kami tidak
        melibatkan pembayaran, jadi tidak ada dana yang perlu dikembalikan.
      </P>

      <H2 id="how">Cara mengajukan pengembalian dana</H2>
      <P>
        Kirim email ke <ContactEmail lang="id" /> dari alamat yang kamu pakai
        untuk masuk ke GitPersona. Sertakan nomor invoice dari bukti
        pembayaranmu jika ada. Kamu tidak perlu menyebutkan alasan.
      </P>

      <H2 id="after">Selanjutnya</H2>
      <Ul>
        <Li>
          Kami mengonfirmasi pengembalian dana lewat email dan mengirimkannya
          melalui penyedia pembayaran kami, DOKU, ke metode pembayaran yang kamu
          pakai. Jika metode itu tidak bisa menerima pengembalian dana, kami
          akan menyepakati cara lain denganmu, misalnya transfer bank.
        </Li>
        <Li>Lama dana masuk bergantung pada metode pembayaran dan bankmu.</Li>
        <Li>Jika kamu membayar dalam mata uang lain, jumlah yang kamu terima bisa sedikit berbeda karena kurs bankmu.</Li>
        <Li>
          Akunmu kembali ke Free setelah dana dikembalikan. Tidak ada yang
          dihapus: profilmu mengikuti{" "}
          <A href="/docs/account/plans-and-billing#when-pro-ends">aturan saat Pro berakhir</A>.
        </Li>
      </Ul>

      <H2 id="chargebacks">Sebelum mengajukan chargeback</H2>
      <P>
        Hubungi kami terlebih dahulu. Dalam {days} hari, pengembalian dana dari
        kami lebih cepat dan mudah daripada sengketa lewat bank.
      </P>

      <P>
        Kebijakan ini merupakan bagian dari{" "}
        <A href="/terms">Ketentuan Layanan</A> kami.
      </P>
    </>
  );
}
