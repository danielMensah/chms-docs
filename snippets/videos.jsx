/*
  Bethel ChMS explainer videos: the one place to add or change a video.

  Every video is hosted on YouTube as Unlisted and plays through the
  privacy-enhanced youtube-nocookie.com player (16:9). While a video's
  youtubeId is "", guide pages show nothing for it and its Video tours
  card says "Video coming soon". To publish a video, paste the ID from
  its YouTube link (the part after "watch?v=" or "youtu.be/") into
  youtubeId in the list below. Nothing else needs to change.

  Use it on a page with:
    import { Video } from "/snippets/videos.jsx";
    <Video id="dashboard" />                       top of a guide page
    <Video id="people-menu" chapter="households" /> start part way through
    <Video id="dashboard" card />                  a card on Video tours

  The list lives inside the component on purpose: Mintlify only puts the
  component a page imports in scope, not the other exports of its file,
  and a nested import of a .js data file did not load in `mint dev`.

  seconds  - the length of the landscape cut. Shown as "1:20" on the card
             and as "1½-minute" in the "Prefer to watch?" line.
  about    - finishes the sentence "This 2-minute video walks through …".
  name     - starts the sentence used with a chapter: "… covers X from 0:49".
  chapters - start times (seconds) for guide pages that open the video
             part way through, from the SCENES list in the video's film.js.
  guides   - the written guides the video belongs to.

  @param {string} id - The video's key in the list below
  @param {string} [chapter] - A chapter id, to start part way through
  @param {boolean} [card] - Draw the Video tours card instead
*/
export const Video = ({ id, chapter, card = false }) => {
  const videos = [
    {
      key: "getting-around",
      title: "Getting around Bethel ChMS",
      name: "The Getting around video",
      icon: "compass",
      seconds: 75,
      summary: "The sidebar, its groups of pages, where to find help, and how it all looks on a phone.",
      about: "the sidebar, its groups of pages, where to find help and how Bethel ChMS looks on a phone",
      guides: [{ title: "Find your way around", href: "/getting-started/find-your-way-around" }],
      youtubeId: "XM7Wkm_juwk",
    },
    {
      key: "dashboard",
      title: "The Dashboard",
      name: "The Dashboard video",
      icon: "gauge",
      seconds: 80,
      summary: "Member status, demographics, today's events, check-ins and new members on your branch Dashboard.",
      about: "your branch Dashboard: member status, demographics, events, check-ins and new members",
      guides: [{ title: "Dashboards", href: "/guides/dashboards" }],
      youtubeId: "ua1fb2pSZFA",
    },
    {
      key: "members-in-out",
      title: "Members in and out",
      name: "The Members in and out video",
      icon: "user-plus",
      seconds: 143,
      summary: "Import members from a spreadsheet, add and edit people, and set them inactive when they leave.",
      about: "importing members from a CSV file, adding and editing members, and setting people inactive when they leave",
      chapters: [{ id: "add", label: "adding, editing and setting people inactive", start: 75 }],
      guides: [
        { title: "Importing members", href: "/guides/importing-members" },
        { title: "Managing members", href: "/guides/managing-members" },
      ],
      youtubeId: "F9-xjQw6Ikc",
    },
    {
      key: "people-menu",
      title: "The People menu",
      name: "The People menu video",
      icon: "users",
      seconds: 145,
      summary: "A quick tour of Members, Households, Groups, Visitors and Care.",
      about: "Members, Households, Groups, Visitors and Care",
      chapters: [
        { id: "duplicates", label: "possible duplicates", start: 34 },
        { id: "households", label: "households", start: 49 },
        { id: "groups", label: "groups", start: 57 },
        { id: "visitors", label: "visitors", start: 65 },
        { id: "care", label: "member care and pastoral care", start: 96 },
      ],
      guides: [
        { title: "Managing members", href: "/guides/managing-members" },
        { title: "Households", href: "/guides/households" },
        { title: "Groups", href: "/guides/groups" },
        { title: "Visitors", href: "/guides/visitors" },
        { title: "Care", href: "/guides/care" },
      ],
      youtubeId: "GiJdAXJo6i8",
    },
    {
      key: "events-setup",
      title: "Setting up events",
      name: "The Setting up events video",
      icon: "calendar",
      seconds: 186,
      summary: "Create one-off and recurring events, change a series or a single date, cancel a date and print a check-in QR poster.",
      about: "creating one-off and recurring events, changing a series or a single date, cancelling a date and printing a check-in QR poster",
      guides: [{ title: "Managing events", href: "/guides/managing-events" }],
      youtubeId: "VFY--8ktwew",
    },
    {
      key: "taking-attendance",
      title: "Taking attendance",
      name: "The Taking attendance video",
      icon: "clipboard-check",
      seconds: 197,
      summary: "Check people in at the door, scan QR codes, enter a paper list in bulk, fix mistakes and run a self check-in kiosk.",
      about: "checking people in at the door, scanning QR codes, entering a paper list in bulk, fixing mistakes and running a self check-in kiosk",
      guides: [{ title: "Recording attendance", href: "/guides/recording-attendance" }],
      youtubeId: "gMnNHhJceWc",
    },
    {
      key: "organisation-menu",
      title: "The Organisation menu",
      name: "The Organisation menu video",
      icon: "building",
      seconds: 154,
      summary: "Branches, users, reports, automation, import, age groups, tags and settings, top to bottom.",
      about: "every page in the Organisation menu, from the Organisation dashboard to Settings",
      guides: [{ title: "Organisation settings", href: "/guides/organisation-settings" }],
      youtubeId: "8v2KnD2fFRc",
    },
    {
      key: "checkin",
      title: "Checking in at church",
      name: "Our check-in video",
      icon: "tablet-screen-button",
      seconds: 80,
      summary: "How members, households and first-time visitors check themselves in at the door.",
      about: "checking in at the door with a QR code, with an email or mobile number, as a household and as a first-time visitor",
      chapters: [{ id: "qr", label: "QR codes and phone wallets", start: 6 }],
      guides: [
        { title: "Kiosk mode", href: "/guides/kiosk-mode" },
        { title: "Member QR codes", href: "/guides/member-qr-codes" },
      ],
      youtubeId: "T74yh07uSXM",
    },
  ];

  const item = videos.find((entry) => entry.key === id);
  if (!item) return null;

  const part = chapter && item.chapters ? item.chapters.find((entry) => entry.id === chapter) : null;
  const start = part ? part.start : 0;
  const clock = (seconds) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

  const player = item.youtubeId ? (
    <iframe
      className="w-full aspect-video rounded-xl"
      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?rel=0${start ? `&start=${start}` : ""}`}
      title={item.title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  ) : null;

  if (card) {
    return (
      <Card title={item.title} icon={item.icon}>
        <p>
          {item.seconds ? <strong>{clock(item.seconds)} · </strong> : null}
          {item.summary}
        </p>
        {player || <p><em>Video coming soon.</em></p>}
        <p>
          {item.guides.length > 1 ? "Read the guides: " : "Read the guide: "}
          {item.guides.map((guide, index) => (
            <span key={guide.href}>
              {index > 0 ? ", " : ""}
              <a href={guide.href}>{guide.title}</a>
            </span>
          ))}
        </p>
      </Card>
    );
  }

  if (!player) return null;
  const halves = item.seconds ? Math.max(1, Math.round(item.seconds / 30)) : 0;
  const length = halves ? `${Math.floor(halves / 2) || ""}${halves % 2 ? "½" : ""}-minute` : "short";
  const line = part
    ? `Prefer to watch? ${item.name} covers ${part.label} from ${clock(part.start)}.`
    : `Prefer to watch? This ${length} video walks through ${item.about}.`;
  return (
    <div>
      <p>{line}</p>
      <Frame>{player}</Frame>
    </div>
  );
};
