<script setup lang="ts">
import * as PortOne from "@portone/browser-sdk/v2";
import {showSuccessToastMessages} from "@/functions/Toast";
async function adultRequest() {
  const response = await PortOne.requestIdentityVerification({
    storeId: "store-af7f519a-dfe9-4dcc-91e8-9ce86af5194d",
    identityVerificationId: "A010002002",
    channelKey: "channel-key-42d2bbbd-796a-4e6d-b872-6e2dfdfded64",
  });
  showSuccessToastMessages(response as string);
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
