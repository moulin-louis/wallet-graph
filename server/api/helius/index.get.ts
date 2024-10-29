import { Helius } from "helius-sdk";

export default defineEventHandler(async () => {
  const runConfig = useRuntimeConfig();
  if (runConfig.heliusApi === undefined) {
    console.error("missing helius API");
    return;
  }
  return createError({ cause: "dont overrun API usage", status: 429 });
  console.log(`heliusAPI = ${runConfig.heliusApi}`);
  const helius = new Helius(runConfig.heliusApi);
  const assets = await helius.rpc.getAssetsByOwner({
    ownerAddress: "4Tb6PVePDK3ghMDwJsizi73qSWycnfHbrowWUx72n8dy",
    page: 1,
  });
  return assets;
});
