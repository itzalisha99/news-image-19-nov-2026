# The World in One Day — Thursday 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/itzalisha99/news-image-19-nov-2026/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard)
[![reward](https://make.fun/badge/news-image-20261119/itzalisha99/news-image-19-nov-2026/reward.svg)](https://make.fun/bounty/news-image-20261119)

A newspaper front-page image summing up the world news of Thursday
19 November 2026, built for the [make.fun](https://make.fun/bounty/news-image-20261119)
bounty "Sum up 19 November's world news in one image".
`main.ts` (Node 22, standard library only) copies the 1024x1024 PNG
beside it to `/output/entry.png`. The PNG was drawn with Pillow from
fixed fonts, colours and geometry — no network, no randomness — so
every run of the program writes the same bytes.

## The stories (all verified in live news reports of 19 November 2026)

- **Lead — GTA VI launches today.** After 13 years, Rockstar's Vice
  City epic arrives on PS5 and Xbox Series X|S, rolling out at
  midnight region by region.
- **Diplomacy — Trump, Xi and Putin meet today in Shenzhen.** The
  first-ever trilateral, on the APEC sidelines; Ukraine, Iran, trade
  and nuclear arms on the table, no deal expected.
- **Space — Voyager 1, one light-day away.** NASA confirms the 1977
  probe is now about 16 billion miles out; a signal takes a full day
  to reach it.
- **USA — Jeffries picked for Speaker.** Democrats nominate Hakeem
  Jeffries 251-11; the full House votes on 3 January, a first if elected.
- **Europe — EU proposes a €45bn Ukraine loan.** €25bn for arms and
  €20bn for the budget in 2027, repaid only after Russian reparations.
- **Middle East — Iran widens its Gulf attacks.** Drones hit a US base
  in Kuwait; Bahrain intercepts more strikes after the US hit Qeshm Island.
- **Asia — Cyclone Akvan nears India.** A very severe storm in the Bay
  of Bengal; heavy rain on 19-20 November, landfall due on 20 November.
- **Also today:** Australia sanctions settler groups; Spain strike
  clashes; Canada rethinks China ties.

Sources checked on 19 November 2026: Rockstar / Game Awards coverage,
Reuters via EU and Gulf reports, NASA, NPR, European Commission,
AP via Gulf coverage, India Meteorological Department bulletins.
Nothing here is invented, and no outcome is claimed before it happens.

## Run it

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
file out/entry.png         # PNG 1024x1024, under 1 MiB
```

## Licence

MIT — see LICENSE.
