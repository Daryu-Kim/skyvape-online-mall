<script setup lang="ts">
import IconLock from "@/components/icons/IconLock.vue";
import IconApple from "@/components/icons/IconApple.vue";
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";
import IconKakao from "@/components/icons/IconKakao.vue";
import router from "@/router";
</script>

<template>
  <main>
    <article class="skyvape-join-msg-article">
      <section class="title-section">
        <h1>SKYVAPE 회원 가입을 위해 이용 약관에 동의해주세요!</h1>
      </section>
    </article>
    <article class="skyvape-join-form-article">
      <section class="form-section">
        <div class="all-check-div">
          <input type=checkbox id="all-check">
          <label for="all-check">
            <div><p>✓</p></div>
            <p>전체 동의</p>
          </label>
        </div>
        <div class="border-div"></div>
        <div class="one-check-div">
          <div>
            <input type=checkbox id="terms">
            <label for="terms">
              <div><p>✓</p></div>
              <p>이용약관 동의 (필수)</p>
            </label>
          </div>
          <div>
            <input type=checkbox id="privacy">
            <label for="privacy">
              <div><p>✓</p></div>
              <p>개인정보처리방침 동의 (필수)</p>
            </label>
          </div>
          <div>
            <input type=checkbox id="event">
            <label for="event">
              <div><p>✓</p></div>
              <p>쇼핑정보 수신 동의 (선택)</p>
            </label>
          </div>
          <div>
            <input type=checkbox id="sms">
            <label for="sms">
              <div><p>✓</p></div>
              <p>SMS 수신 동의 (선택)</p>
            </label>
          </div>
        </div>
      </section>
      <section class="button-section">
        <button class="confirm" @click="">다음</button>
        <button class="cancel" @click="router.back()">취소</button>
      </section>
    </article>
  </main>
</template>

<style scoped lang="scss">
main {
  > .skyvape-join-msg-article {
    padding-bottom: 3.6rem;
    border-bottom: .1rem solid var(--color-border-hover);

    > .title-section {
      > h1 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 3.2rem;
        word-break: keep-all;
      }
    }
  }

  > .skyvape-join-form-article {
    padding: 3.6rem 0;

    > .form-section {
      border: .1rem solid var(--color-border-hover);
      border-radius: 0.8rem;

      > .all-check-div {
        display: flex;
        align-items: center;
        padding: 0 1.6rem;

        > label {
          height: 5.2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.4rem;

          > div {
            width: 2.4rem;
            height: 2.4rem;
            border-radius: 50%;
            background: none;
            border: .1rem solid var(--color-border-hover);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;

            > p {
              font-weight: 900;
            }
          }

          > p {
            font-weight: 700;
          }

        }

        input[type=checkbox]:checked + label {
          > div {
            background-color: var(--color-accent);
            border: none;

            > p {
              color: black;
            }
          }
        }
      }

      > .border-div {
        border: .1rem solid var(--color-border-hover);
      }

      > .one-check-div {
        display: flex;
        flex-direction: column;
        padding: 0 1.6rem;

        > div {

          > label {
            height: 5.2rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            font-size: 1.4rem;

            > div {
              width: 2.4rem;
              height: 2.4rem;
              border-radius: 50%;
              background: none;
              border: .1rem solid var(--color-border-hover);
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;

              > p {
                font-weight: 900;
              }
            }

            > p {
              font-weight: 500;
            }

          }
        }

        input[type=checkbox]:checked + label {
          > div {
            background-color: var(--color-accent);
            border: none;

            > p {
              color: black;
            }
          }
        }
      }
    }

    > .button-section {
      margin-top: 3.6rem;
      display: flex;
      align-items: center;
      gap: 1.2rem;
      > button {
        flex: 1;
        padding: 0 1.6rem;
        height: 4.2rem;
        border-radius: 0.8rem;
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--color-text);

        &.confirm {
          background-color: var(--color-accent);
          color: black;
        }

        &.cancel {
          border: .2rem solid var(--color-border);
        }
      }
    }
  }
}
</style>
