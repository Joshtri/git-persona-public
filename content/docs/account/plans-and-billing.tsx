import type { DocMeta } from "@/lib/docs/types";
import { A, H2, Lead, Li, P, Ul } from "@/components/docs/prose";
import { Callout } from "@/components/docs/callout";
import { CodeBlock } from "@/components/docs/code-block";
import { WhenProLive } from "@/components/docs/when-pro-live";
import { site } from "@/lib/site";

export const meta: DocMeta = {
  slug: "account/plans-and-billing",
  title: "Plans and billing",
  description:
    "Free and Pro plans, signing in, the Pro trial, devices, offline use, and what happens when Pro ends — in the desktop app and the CLI.",
  category: "account",
  order: 1,
  toc: [
    { id: "plans", text: "Free and Pro" },
    { id: "what-counts", text: "What the limit counts" },
    { id: "existing-users", text: "If you already use GitPersona" },
    { id: "signing-in", text: "Signing in" },
    { id: "trial", text: "The Pro trial" },
    { id: "buying", text: "Buying and renewing Pro" },
    { id: "devices", text: "Devices" },
    { id: "offline", text: "Offline use" },
    { id: "when-pro-ends", text: "When Pro ends" },
    { id: "cli", text: "CLI commands" },
  ],
};

export function Body() {
  return (
    <>
      <Lead>
        GitPersona is free for up to three Git identities, with every feature
        included and no account. Pro removes the identity limit. This page covers
        how plans work in both the desktop app and the <code>gitpersona</code>{" "}
        CLI.
      </Lead>

      <WhenProLive
        otherwise={
          <Callout variant="note" title="Pro is launching soon">
            This page describes how plans will work once Pro launches. Nothing
            you set up before then will ever be locked.
          </Callout>
        }
      />

      <H2 id="plans">Free and Pro</H2>
      <Ul>
        <Li>
          <strong>Free</strong> — every feature, up to 3 profiles and up to 3
          pinned repositories per profile, no account, works fully offline, and
          never expires.
        </Li>
        <Li>
          <strong>Pro</strong> — unlimited profiles and pinned repositories, on up
          to 3 devices per
          account. Pro is prepaid for a month or a year. See{" "}
          <A href="/pricing">Pricing</A> for current prices.
        </Li>
      </Ul>

      <H2 id="what-counts">What the limit counts</H2>
      <P>
        Profiles (Git identities) and pinned repositories. Free allows 3
        profiles and 3 pinned repositories per profile. Repositories you only
        scan or track don&apos;t count. Rules, repository groups, SSH keys, and
        HTTPS credentials are unlimited on every plan, and switching between
        your profiles is never limited.
      </P>
      <P>
        When you try to create a fourth profile on Free, the desktop app opens an
        upgrade dialog where you can start the trial or pick a plan. You can also
        delete a profile you no longer use to free a slot. In the CLI,{" "}
        <code>gitpersona add</code> prints how many profiles you use and exits
        with code <code>3</code>, so scripts can tell a plan limit apart from
        other errors.
      </P>

      <H2 id="existing-users">If you already use GitPersona</H2>
      <P>
        Everything you set up before Pro launched keeps working on Free, including
        profiles and pinned repositories beyond the Free limits. The limits only
        apply to new ones.
        If you delete one of those earlier profiles, your allowance shrinks back
        toward the Free limit.
      </P>

      <H2 id="signing-in">Signing in</H2>
      <P>
        Signing in is optional on Free. You only need it to start the trial or
        buy Pro. There is no password: GitPersona emails you a 6-digit code.
      </P>
      <Ul>
        <Li>
          <strong>Desktop app</strong> — open <strong>Settings → Account</strong>{" "}
          and choose <strong>Sign in</strong>, enter your email, then type the
          code. The code expires after 10 minutes; check your spam folder if it
          doesn&apos;t arrive.
        </Li>
        <Li>
          <strong>CLI</strong> — run <code>gitpersona login</code> and follow the
          prompts.
        </Li>
      </Ul>
      <P>
        The desktop app and the CLI on the same machine share one sign-in, so
        signing in or out in either one applies to both.
      </P>

      <H2 id="trial">The Pro trial</H2>
      <P>
        The trial gives you Pro for 14 days with no card. It is available once
        per account and once per device. Start it from the upgrade dialog, from{" "}
        <strong>Settings → Account</strong>, or with <code>gitpersona trial</code>.
        When it ends you return to Free; nothing is charged.
      </P>

      <H2 id="buying">Buying and renewing Pro</H2>
      <P>
        Choose a plan and price list in the upgrade dialog, or run{" "}
        <code>gitpersona upgrade</code>. Checkout opens in your browser on
        DOKU&apos;s hosted payment page, so card details never pass through
        GitPersona. After paying, open <strong>Settings → Account</strong> (or
        run <code>gitpersona plan</code>) and Pro is active.
      </P>
      <P>
        Pro does not renew automatically. Buy again to extend it; renewing early
        adds to the time you have left, so you never lose days. You can get a
        full refund within {site.legal.refundDays} days of purchase; see the{" "}
        <A href="/refund">Refund Policy</A>.
      </P>

      <H2 id="devices">Devices</H2>
      <P>
        Pro works on up to 3 devices per account. The desktop app and the CLI on
        the same machine count as one device. To free a slot, open{" "}
        <strong>Settings → Account</strong> and choose{" "}
        <strong>Deactivate</strong> next to a device; that device is signed out.
        Devices that haven&apos;t been seen for 60 days stop counting toward the
        limit.
      </P>

      <H2 id="offline">Offline use</H2>
      <P>
        GitPersona verifies your plan when it starts, every 12 hours while it
        runs, and when you open <strong>Settings → Account</strong>. Pro keeps
        working offline for up to 30 days after the last successful check. After
        that, GitPersona behaves like Free until it can reconnect, and nothing is
        deleted.
      </P>

      <H2 id="when-pro-ends">When Pro ends</H2>
      <P>
        If you have more profiles than Free allows, GitPersona asks you to choose
        which 3 stay active. The others are locked: still visible, editable, and
        deletable, but they can&apos;t be applied or used for new repository
        assignments until you renew or pick them as active. You can change your
        choice at any time.
      </P>
      <P>
        Repositories already pinned to a locked profile keep that identity in
        their <code>.git/config</code>, so their commits stay correct. Renewing
        unlocks everything immediately.
      </P>

      <H2 id="cli">CLI commands</H2>
      <CodeBlock
        label="gitpersona — account and plan"
        code={`gitpersona login                 # sign in with an email code
gitpersona logout                # sign out on this machine
gitpersona plan                  # show your plan and profile usage
gitpersona plan choose <label>…  # pick which profiles stay active on Free
gitpersona trial                 # start the 14-day Pro trial
gitpersona upgrade --plan yearly # buy Pro (monthly | yearly | founder-lifetime)
gitpersona upgrade --indonesia   # use the Indonesia price list`}
      />
    </>
  );
}
