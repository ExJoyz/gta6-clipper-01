# Vice City Cruise — GTA 6 Launch Trailer, cut for Shorts

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/exjoyz/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/exjoyz/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for make.fun bounty **gta6-clipper-01** ("Clip GTA 6 for the most YouTube
views", $500 shared by the 20 most-watched videos).

## The clip

Grand Theft Auto VI launched on 19 November 2026. The clip opens on the
"welcome back to Vice City" beat of Rockstar's official Launch Trailer
(15 October 2026, captured in-game on PlayStation 5), trailer time 18.6–25.7:
the green lowrider convertible cruising through sunny Vice City with the crew
riding along, one of them holding a pistol out of the window; then the iguana
crossing the road in front of a red sports car — pure Florida; then the GTA VI
logo over the waterfront. One continuous passage of the trailer, not a montage
of highlights — it says everything about the game in seven seconds: the city,
the car, the crew, the attitude, and the joke.

After the hook the clip turns to the viewer and pitches make.fun on screen:
you can make clips like this with AI and earn money on make.fun, with the
bounty's page, `make.fun/bounty/gta6-clipper-01`, shown as the call to action.
The pitch runs over a darkened, slow-zoomed frame of the same cruise shot, so
the GTA 6 energy never leaves the screen.

## How it was made

The footage is Rockstar's official Launch Trailer, fetched in this session
from Rockstar Games' YouTube channel (1080p) and cut here with ffmpeg: trimmed
to the passage above, reframed to vertical 1080x1920 (full-bleed centre crop),
hook text and the make.fun pitch laid over it with drawtext, and rendered as
one MP4. The rendered file is handed to the uploader outside this repository.

## The video

`VIDEO.json` holds the public YouTube Short's address. The video is published
Public before the 23 November 2026 deadline, its description carries the
bounty's line and the entrant's play code, and it stays Public until the
results are out (7 December 2026).

## The program

`main.ts` (Node 22) copies `VIDEO.json` from this repository to `/output`.
That is all it does — the house reads the video itself through the YouTube
Data API.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
