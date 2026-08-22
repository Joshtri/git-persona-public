import { Check, Minus, Xmark as X } from "@gravity-ui/icons";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";

type Cell = boolean | "partial" | string;

const rows: { label: string; manual: Cell; gitpersona: Cell }[] = [
  { label: "Speed", manual: "Minutes per switch", gitpersona: "Under a second" },
  { label: "Easy setup", manual: false, gitpersona: true },
  { label: "Multiple profiles", manual: "partial", gitpersona: true },
  { label: "SSH management", manual: "Hand-edited config", gitpersona: true },
  { label: "Credential switching", manual: false, gitpersona: true },
  { label: "Rule-based auto-assignment", manual: false, gitpersona: true },
  { label: "Automatic identity switching", manual: false, gitpersona: true },
  { label: "One-click switch", manual: false, gitpersona: true },
  { label: "Wrong-identity prevention", manual: false, gitpersona: true },
  { label: "Visual dashboard", manual: false, gitpersona: true },
];

function CellContent({ value, positive }: { value: Cell; positive?: boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-success">
        <Check className="size-4" aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center text-subtle/70">
        <X className="size-4" aria-hidden />
        <span className="sr-only">No</span>
      </span>
    );
  if (value === "partial")
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-subtle">
        <Minus className="size-4" aria-hidden /> Scripts &amp; includeIf
      </span>
    );
  return (
    <span className={`text-sm ${positive ? "text-success" : "text-subtle"}`}>
      {value}
    </span>
  );
}

export function Comparison() {
  return (
    <Section id="compare">
      <SectionHeading
        eyebrow="Comparison"
        title={
          <>
            Retire the <span className="text-gradient">ritual</span>.
          </>
        }
        description="Everything you currently do with scripts, aliases, and muscle memory — handled."
      />
      <Reveal className="mt-14 overflow-hidden rounded-2xl border border-white/[0.08]">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Manual Git configuration compared to GitPersona
          </caption>
          <thead>
            <tr className="border-b border-white/[0.08] bg-white/[0.02]">
              <th scope="col" className="px-5 py-4 text-sm font-medium text-subtle sm:px-6">
                Capability
              </th>
              <th scope="col" className="px-5 py-4 text-sm font-medium text-subtle sm:px-6">
                Manual Git config
              </th>
              <th
                scope="col"
                className="relative bg-accent/[0.07] px-5 py-4 text-sm font-semibold text-accent-soft sm:px-6"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                GitPersona
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.label}
                className="border-b border-white/[0.05] last:border-b-0"
              >
                <th
                  scope="row"
                  className="px-5 py-3.5 text-sm font-medium text-foreground sm:px-6"
                >
                  {row.label}
                </th>
                <td className="px-5 py-3.5 sm:px-6">
                  <CellContent value={row.manual} />
                </td>
                <td className="bg-accent/[0.05] px-5 py-3.5 sm:px-6">
                  <CellContent value={row.gitpersona} positive />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}
