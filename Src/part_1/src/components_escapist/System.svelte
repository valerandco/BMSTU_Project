<script>
    const systems = [
      {
        os: "Windows 7 / 8 / 8.1 / 10 x64",
        processor: "Intel Core2 Duo E4300 (2 * 1800) / AMD Athlon Dual Core 4450e (2 * 2300) or equivalent",
        memory: "4 GB RAM",
        graphics: "GeForce 8800 GTX (768 MB) / Intel HD 4600 / Radeon HD 3850 (512 MB)",
        storage: "3 GB available space",
        icons: ["Windows.svg"]
      },
      {
        os: "Windows 7 / 8 / 8.1 / 10 x64",
        processor: "Intel Core i5-4570T (2* 2900) / AMD FX-6100 (6 * 3300) or equivalent",
        memory: "4 GB RAM",
        graphics: "GeForce GTX 750 Ti (2048 MB) / Radeon HD 7850 (2048 MB)",
        storage: "3 GB available space",
        icons: ["Windows.svg"]
      }
    ];
  </script>
  
  <div class=" text-white p-4">
    <div class="font-bold ml-5 mb-2">SYSTEM REQUIREMENTS</div>
    <img src="src/img/About/Separator_long.png" alt="Separator_long" class="w-full h-auto mt-4 xsm:px-5 sm:px-5 4k:mb-10" />
    <div class="grid grid-cols-2 gap-4">
      {#each systems as system}
        <div class=" p-4 rounded-lg">
          <div class="flex items-center mb-2">
            {#each system.icons as icon}
              <img src={`src/img/Platforms/${icon}`} class="h-6 mr-2" alt="OS Icon">
            {/each}
            
          </div>
          <div>
            <strong>OS:</strong><br>
            {system.os}
          </div>
          <div class="mt-5">
            <strong>Processor:</strong><br>
            {system.processor}
          </div>
          <div class="mt-5">
            <strong>Memory:</strong><br>
            {system.memory}
          </div>
          <div class="mt-5">
            <strong>Graphics:</strong><br>
            {system.graphics}
          </div>
          <div class="mt-5">
            <strong>Storage:</strong><br>
            {system.storage}
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    /* Additional styling if necessary */
  </style>
  