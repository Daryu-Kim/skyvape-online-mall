<script setup lang="ts">
import * as PortOne from "@portone/browser-sdk/v2";
async function adultRequest() {
  const response = await PortOne.requestIdentityVerification({
    storeId: "store-ea6b352b-061d-4dec-872c-05067992a259",
    identityVerificationId: "q34r-qn93r8mw09e09x",
    channelKey: "channel-key-98690180-8c66-4b18-978d-85fb106ddaca",
  });
  console.log(response);
}

function paymentRequest() {
  PortOne.requestPayment({
    // 가맹점 storeId로 변경해주세요.
    storeId: 'store-ea6b352b-061d-4dec-872c-05067992a259',
    paymentId: 'paymentId_{now()}',
    orderName: '나이키 와플 트레이너 2 SD',
    totalAmount: 1000,
    currency: 'CURRENCY_KRW',
    pgProvider: 'PG_PROVIDER_TOSSPAYMENTS',
    payMethod: "CARD"
  });
}
</script>

<template>
  <main>
    <button @click="adultRequest">본인인증</button>
    <button @click="paymentRequest">결제테스트</button>
  </main>
</template>

<style scoped lang="scss">
.skyvape-main-banner {
  aspect-ratio: 3 / 1.25;

  > .skyvape-main-banner-slide {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
