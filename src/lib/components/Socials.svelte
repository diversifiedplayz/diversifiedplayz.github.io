<script>
  let socials = [
    {
      name: "Twitter",
      url: "https://twitter.com/diversifiedpla1",
      icon: "/images/twitter.svg",
      class: "twitter-icon", // Add a class for each social icon
    },
    {
      name: "Github",
      url: "https://github.com/diversifiedplayz",
      icon: "/images/github.svg",
      class: "github-icon", // Add a class for each social icon
    },
    {
      name: "PlanetMinecraft",
      url: "https://www.planetminecraft.com/member/diversifiedplayz",
      icon: "/images/planetminecraft.svg",
      class: "planetminecraft-icon", // Add a class for each social icon
    },
  ];
</script>

<div
  class="flex flex-row justify-center items-center text-text gap-2 bg-white bg-opacity-10 py-2 px-4 rounded-full"
>
  <a
    href={socials[0].url}
    target="_blank"
    rel="noopener noreferrer"
    class="fill-current"
  >
    <img
      src={socials[0].icon}
      alt={socials[0].name}
      class="w-8 h-8 twitter-icon fill-text text-white icon-hover"
    />
  </a>

  <a
    href={socials[1].url}
    target="_blank"
    rel="noopener noreferrer"
    class="fill-current"
  >
    <img
      src={socials[1].icon}
      alt={socials[1].name}
      class="w-8 h-8 github-icon fill-text text-white icon-hover"
    />
  </a>

  <a
    href={socials[2].url}
    target="_blank"
    rel="noopener noreferrer"
    class="fill-current"
  >
    <img
      src={socials[2].icon}
      alt={socials[2].name}
      class="w-8 h-8 planetminecraft-icon fill-text text-white icon-hover"
    />
  </a>
</div>

<style>
  .twitter-icon {
    width: 24px;
    height: 24px;
  }

  .github-icon {
    width: 26px;
    height: 26px;
  }

  .planetminecraft-icon {
    width: 30px;
    height: 30px;
  }

  .icon-hover:hover {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  .icon-hover {
    transition: opacity 0.125s ease-in-out;
  }
</style>
