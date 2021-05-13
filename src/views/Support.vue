<template>
<!-- Change follow up page and action page -->
  <div class="app">
    <h1>Support for Academics</h1>
    <b-tabs  content-class="mt-3" fill>
      <b-tab title="Listen" class="tabsForSupport" active>
        <div class="support">
          <div class="second col-12">
            <h4>
              If the student is creating a disturbance or if you are concerned
              about your personal safety, contact Security on +44 (0)191 208
              6817. <br />
              In an emergency, contact security on +44 (0)191 208 6666.
            </h4>
            <p>
              If the student appears to be agitated or upset, could a brief
              meeting be offered immediately? <br />If you have an urgent
              deadline or an imminent appointment, say so and offer a specific
              time later. Alternatively, could the student be directed to
              someone who can offer time immediately? <br />Make clear how much
              time is available. <br />
              Try to ensure the time offered is free from interruptions and is
              in a private space. <br />
              Maintain a professional relationship e.g. do not give a student
              your private mobile phone number, avoid sharing personal details
              about yourself, maintain appropriate boundaries.
            </p>
          </div>
          <div class="col-4">
            <img
              style="width: 20%"
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNjIuNjYgNTkuMDY3Yy0xMi4wMSAwLTIzLjY5MyAxLjQyNy0zNC44OSA0LjEyMS0zMC41MjUtMjMuNzIzLTY4LjMwNi0zNi44NzItMTA3LjI2Ny0zNy4xODItNDcuNTU5LS4zNjUtOTIuMzgxIDE3Ljg2My0xMjYuMTUgNTEuMzY1LTMzLjgxMyAzMy41NDUtNTIuNDM0IDc4LjI2OC01Mi40MzQgMTI1LjkyOSAwIDExLjc4NC0yLjkxNiAyMy41MTktOC40MzMgMzMuOTM1bC0yOS45OTcgNTYuNjI5Yy00Ljg3IDkuMTU5LTQuNjI5IDE5Ljk3Mi42NDUgMjguOTI2IDUuMjc2IDguOTU4IDE0LjYyMSAxNC40MTUgMjQuOTk4IDE0LjU5N2wxMi43MzkuMDAydjQ1LjMzNGMwIDI3LjEwOCAyMi4wMzQgNDkuMTYyIDQ5LjExNiA0OS4xNjJoMzEuOTIzdjEzLjI1N2MwIDIyLjUyOSAxOC4zMTMgNDAuODU3IDQwLjgyMiA0MC44NTdoMTQwLjI5OWMyMi41MDkgMCA0MC44MjItMTguMzI4IDQwLjgyMi00MC44NTd2LTI5LjM1OGMwLTE5LjUwMyAxLjk5OC0zOS4wMDYgNS45NDktNTguMTQ4IDMuOTEzLjMwOSA3Ljg2Ny40NjcgMTEuODU4LjQ2NyA4Mi4zNDcgMCAxNDkuMzQtNjcuMDc0IDE0OS4zNC0xNDkuNTE5IDAtODIuNDQzLTY2Ljk5NC0xNDkuNTE3LTE0OS4zNC0xNDkuNTE3em0tNDcuODA2IDM1Ni43MTh2MjkuMzU4YzAgNS45ODYtNC44NTUgMTAuODU3LTEwLjgyMyAxMC44NTdoLTE0MC4yOTljLTUuOTY4IDAtMTAuODIzLTQuODcxLTEwLjgyMy0xMC44NTd2LTE2LjkyN2MwLTE0LjUxOS0xMS44MDQtMjYuMzMxLTI2LjMxNS0yNi4zMzFoLTM1LjYwN2MtMTAuNTQxIDAtMTkuMTE3LTguNTk2LTE5LjExNy0xOS4xNjJ2LTQ5LjAwNGMwLTE0LjUxOS0xMS44MDQtMjYuMzMxLTI2LjMxNS0yNi4zMzFoLTE1LjI4M2wyOS43MjItNTYuMTEyYzcuODAxLTE0LjcyNiAxMS45MjQtMzEuMzE2IDExLjkyNC00Ny45NzggMC0zOS42MDMgMTUuNDcxLTc2Ljc2MSA0My41NjMtMTA0LjYzMSAyOC4wNDktMjcuODI3IDY1LjI0Mi00Mi45NSAxMDQuNzgzLTQyLjY2NCAyNS44OTIuMjA2IDUxLjE0OSA3LjIzIDczLjE4NyAyMC4xMS00Ny41OTUgMjUuMDI2LTgwLjEzMiA3NS4wMTYtODAuMTMyIDEzMi40NzEgMCA2OC4wNzcgNDUuNjc4IDEyNS42NzMgMTA3Ljk2IDE0My42ODEtNC4yNjYgMjAuOTE0LTYuNDI1IDQyLjIxNS02LjQyNSA2My41MnptNDcuODA2LTg3LjY4Yy02NS44MDQgMC0xMTkuMzQtNTMuNjE2LTExOS4zNC0xMTkuNTE5czUzLjUzNS0xMTkuNTE5IDExOS4zNC0xMTkuNTE5IDExOS4zNDEgNTMuNjE2IDExOS4zNDEgMTE5LjUxOS01My41MzYgMTE5LjUxOS0xMTkuMzQxIDExOS41MTl6Ii8+PHBhdGggZD0ibTM2NS41MDYgMTE0LjcwNWMtMTUuNTczLS43NzktMzAuODE2IDUuMDY4LTQxLjgxNyAxNi4wNzEtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzIDUuODU3IDUuODU4IDE1LjM1NSA1Ljg1OCAyMS4yMTIgMCA1LjA4OC01LjA4OCAxMS44NzYtNy42OTcgMTkuMDg3LTcuMzIyIDEyLjQzMi42MyAyMi44NTIgMTAuODM3IDIzLjcyMSAyMy4yMzkuNzgxIDExLjE0NC01LjY2NyAyMS4zMTEtMTYuMDQ2IDI1LjI5OS0xNC4zNTggNS41MTgtMjQuMDA0IDE5Ljc0Mi0yNC4wMDQgMzUuMzk2IDAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTVjMC0zLjMyNiAxLjkxNS02LjI5NyA0Ljc2Ny03LjM5MyAyMi43Ny04Ljc1IDM2LjkxOS0zMS4wMTQgMzUuMjA5LTU1LjQtMS45NDItMjcuNzI3LTI0LjM1My00OS42OTYtNTIuMTI5LTUxLjEwM3oiLz48cGF0aCBkPSJtMzYyLjY2IDI1Ni45NGMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXYxNS41OTljMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTUuNTk5Yy0uMDAxLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIvPjwvc3ZnPg=="
            />
            <h4>Ask Yourself</h4>
            <p>
              What seems to be the main issue? <br />
              Is this the whole story or are there other problems? <br />
              Is the issue having a major impact on the student’s wellbeing?
              <br />
              How does the student think/hope you can help them? <br />
              How do you think you can help the student as they might not know
              for themselves? <br />
            </p>
          </div>
          <p class="calm col-4">
            <img src="../assets/calm.jpg" class="image" />
          </p>
          <div class="col-5">
            <img
              style="width: 10%"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMzAsMTY1QzMzMCw3NC4wMTksMjU1Ljk4MSwwLDE2NSwwUzAsNzQuMDE5LDAsMTY1YzAsNDEuNzAyLDcuNzU2LDgzLjE2MywxNS4yNTYsMTIzLjI1OA0KCQkJQzIyLjUwNSwzMjcuMDA5LDMwLDM2Ny4wOCwzMCw0MDZjMCw1OC40NDgsNDcuMTAzLDEwNiwxMDUsMTA2YzU3Ljg5NywwLDEwNS00Ny41NTIsMTA1LTEwNmMwLTcuNDQ5LTAuNzc3LTE1LjUyMS0yLjEzNC0yMi4xNDYNCgkJCWMtNy4zMTktMzUuNzY3LDE5LjAyNC03Ny4zOTksNDMuODA3LTEwMi4xODJDMzEyLjgzNywyNTAuNTA4LDMzMCwyMDkuMDczLDMzMCwxNjV6IE0yMDguNDc2LDM4OS44NjkNCgkJCUMyMDkuNDMsMzk0LjUzMywyMTAsNDAwLjU2MywyMTAsNDA2YzAsNDEuOTA2LTMzLjY0NSw3Ni03NSw3NnMtNzUtMzQuMDk0LTc1LTc2YzAtNDEuNzAyLTcuNzU2LTgzLjE2My0xNS4yNTYtMTIzLjI1OA0KCQkJQzM3LjQ5NSwyNDMuOTkxLDMwLDIwMy45MiwzMCwxNjVDMzAsOTAuNTYxLDkwLjU2MSwzMCwxNjUsMzBzMTM1LDYwLjU2MSwxMzUsMTM1YzAsMzYuMDYtMTQuMDQyLDY5Ljk2MS0zOS41NCw5NS40NTkNCgkJCUMyMjguOTcxLDI5MS45NDksMTk4Ljc3OCwzNDIuNDgxLDIwOC40NzYsMzg5Ljg2OXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE4NC42MTcsNjEuNzk3QzExOC42OTYsNDkuNzI0LDYwLDEwMC4xNTQsNjAsMTY1YzAsMzYuMTA4LDYuOTA0LDcyLjgsMTQuMjMsMTExLjczMw0KCQkJYzIuMzUzLDEyLjUsNC43ODYsMjUuNDI1LDYuOTY5LDM4LjMwM0M4NS42MiwzNDEuMDksMTA3LjY5NCwzNjAsMTMzLjY4OCwzNjBjMjUuMjcsMCw0Ny4yMDctMTcuOTg0LDUyLjE2Mi00Mi43NjINCgkJCWMwLjAzNy00LjYxMSwxOC4wOTktNTMuMDI3LTE5LjQzMS05OC44MDZjLTE4LjkxOC0yMy4wNzYtNDYuMzgxLTM2Ljg1NC03NS45OTEtMzguMzA0QzkwLjE0OSwxNzUuMDM4LDkwLDE2OS45OTcsOTAsMTY1DQoJCQljMC00NS4yMTcsNDAuNzYxLTgyLjU2Niw4OS4yMTMtNzMuNjk0YzU4Ljg2MiwxMC43OCw4MS4zNDIsODQuMTg1LDM4LjgyMywxMjYuNzRsMjEuMjIzLDIxLjIwNA0KCQkJQzI5OC4zMDYsMTgwLjE1MSwyNjcuOTkyLDc3LjA2NiwxODQuNjE3LDYxLjc5N3ogTTE0My4yMTksMjM3LjQ1MWMyNy41MjMsMzMuNTcyLDEzLjMxMiw2OC43NjcsMTMuMjEzLDczLjkwMw0KCQkJQzE1NC4yNzEsMzIyLjE1OCwxNDQuNzA2LDMzMCwxMzMuNjg4LDMzMGMtMTEuMzExLDAtMjAuOTQ2LTguNDA0LTIyLjkxLTE5Ljk4MWMtMi4yMjktMTMuMTQ0LTQuNjg4LTI2LjIwNC03LjA4MS0zOC45MjENCgkJCWMtMy45MjYtMjAuODY0LTcuNzMtNDEuMDgxLTEwLjMyOS02MC42NTlDMTEyLjgxMiwyMTIuNTQyLDEzMC42NTQsMjIyLjEyNSwxNDMuMjE5LDIzNy40NTF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxyZWN0IHg9IjM2MSIgeT0iMjQwIiB3aWR0aD0iMTUxIiBoZWlnaHQ9IjMwIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCQ0KCQkJPHJlY3QgeD0iNDIwLjk5MyIgeT0iMzM3LjkwMyIgdHJhbnNmb3JtPSJtYXRyaXgoMC40NDcyIC0wLjg5NDQgMC44OTQ0IDAuNDQ3MiAtMTIxLjIxNTUgNjEzLjgzMTUpIiB3aWR0aD0iMjkuOTk5IiBoZWlnaHQ9IjEzNC4xNTYiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJDQoJCQk8cmVjdCB4PSIzNjguOTM4IiB5PSI4OS45OTgiIHRyYW5zZm9ybT0ibWF0cml4KDAuODk0NCAtMC40NDcyIDAuNDQ3MiAwLjg5NDQgLTAuOTI0OCAyMDYuMDc3KSIgd2lkdGg9IjEzNC4xNTYiIGhlaWdodD0iMjkuOTk5Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            />
            <h4>Listening with skill</h4>
            <p>
              Use open questions. <br />Occasionally allow silences to last
              slightly longer than is comfortable. People need time and courage
              to find the right words. <br />Check with the student that you
              have understood them correctly.
              <br />
              Reflect their words back to them to give them a chance to clarify
              or expand on something. <br />
              Consider their body language and any recent behaviour changes you
              might have noticed. <br />Do not be drawn into physical contact
              with the student. Making a record <br />
              If you are going to make notes, explain to the student why you are
              doing this, even if it’s just to serve your own memory.
            </p>
          </div>
          <div class="col-4">
            <img
              style="width: 10%"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTUuOTE0LDE4OS42MDRjLTE4Ljk2NS0xNS45MTQtNDcuMzQzLTEzLjQyNC02My4yMjgsNS41MDZsLTQyLjY5NSw1MC41MjNWOTkuMTI5YzAtMTIuMjc5LTUuMTA2LTI0LjE3LTE0LjAwOC0zMi42MjUNCgkJCWwtNTYuOTc4LTU0LjEyNUMzMTAuNjA2LDQuNCwyOTkuNiwwLjAwNSwyODguMDE1LDAuMDA1SDQ0Ljk5OUMyMC4xODcsMC4wMDUsMCwyMC4xOTIsMCw0NS4wMDR2NDIxLjk5MQ0KCQkJYzAsMjQuODEyLDIwLjE4Nyw0NC45OTksNDQuOTk5LDQ0Ljk5OWgyOTkuOTk0YzI0LjgxMiwwLDQ0Ljk5OS0yMC4xODcsNDQuOTk5LTQ0Ljk5OXYtODEuOTYxDQoJCQlDMzkxLjgzNSwzODIuODUxLDUwMS4xMTYsMjUzLjQwNyw1MDEuNDYsMjUzQzUxNy40NDcsMjMzLjk0OCw1MTQuOTY5LDIwNS41OTIsNDk1LjkxNCwxODkuNjA0eiBNMjk5Ljk5NCwzNS42OTUNCgkJCWM2MC4wMTMsNTcuMDA4LDU1Ljc1MSw1Mi44NDEsNTYuODc2LDU0LjMwOWgtNTYuODc2VjM1LjY5NXogTTM1OS45OTIsNDY2Ljk5NWMwLDguMjcxLTYuNzI5LDE1LTE1LDE1SDQ0Ljk5OQ0KCQkJYy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1VjQ1LjAwNGMwLTguMjcxLDYuNzI5LTE1LDE1LTE1aDIyNC45OTV2NzQuOTk4YzAsOC4yODQsNi43MTYsMTUsMTUsMTVoNzQuOTk4djE2MS4xMjkNCgkJCWMtNi40NDMsNy42MjQtNTguMTc4LDY4Ljg0My02My43Nyw3NS40NmMtNC40NjcsNS4zMjQtNy42ODIsMTEuNzExLTkuMjk2LDE4LjQ3bC0xMy45NCw1OC4zNTYNCgkJCWMtMS4zMTksNS41MjYsMC41OTYsMTEuMzI0LDQuOTQ4LDE0Ljk3NmM0LjM1NiwzLjY1NiwxMC4zOTksNC41MjksMTUuNjA3LDIuMjcybDU1LjA1LTIzLjg2Mg0KCQkJYzQuMTMzLTEuNzkyLDcuOTg4LTQuMjI2LDExLjQwMS03LjE1MVY0NjYuOTk1eiBNMzI0LjMxNSwzNjkuODI3bDIyLjk3OCwxOS4yOGwtNS4xMSw2LjA1MmMtMS40ODcsMS43NzQtMy4zOTgsMy4xOTktNS41MjMsNC4xMg0KCQkJbC0yNy41MjQsMTEuOTMxbDYuOTcxLTI5LjE3OGMwLjUzOC0yLjI1MywxLjYwOS00LjM4MiwzLjA2NC02LjExNkwzMjQuMzE1LDM2OS44Mjd6IE0zNjYuNjQ0LDM2Ni4xODRsLTIyLjk2Ny0xOS4yNzENCgkJCWMyLjMzLTIuNzU3LDc3LjY5OC05MS45NDMsODIuOTEtOTguMTFsMjIuOTE5LDE5LjIzMUwzNjYuNjQ0LDM2Ni4xODR6IE00NzguNTA5LDIzMy42ODJsLTkuNjQ5LDExLjQzbC0yMi45MDgtMTkuMjIyDQoJCQlsOS42ODItMTEuNDU3YzUuMjg5LTYuMzAzLDE0LjcxLTcuMTI1LDIwLjk5Ny0xLjg0OUM0ODMuMDQzLDIxNy45NjMsNDgzLjc1LDIyNy40MzYsNDc4LjUwOSwyMzMuNjgyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjI0Ljk5NSw5MC4wMDNINzQuOTk4Yy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1czYuNzE2LDE1LDE1LDE1aDE0OS45OTdjOC4yODQsMCwxNS02LjcxNiwxNS0xNQ0KCQkJUzIzMy4yNzksOTAuMDAzLDIyNC45OTUsOTAuMDAzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzE0Ljk5MywxODEuMDAxSDc0Ljk5OGMtOC4yODQsMC0xNSw2LjcxNi0xNSwxNXM2LjcxNiwxNSwxNSwxNWgyMzkuOTk1YzguMjg0LDAsMTUtNi43MTYsMTUtMTUNCgkJCVMzMjMuMjc3LDE4MS4wMDEsMzE0Ljk5MywxODEuMDAxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzE0Ljk5MywyNzFINzQuOTk4Yy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1YzAsOC4yODQsNi43MTYsMTUsMTUsMTVoMjM5Ljk5NWM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1DQoJCQlDMzI5Ljk5MywyNzcuNzE1LDMyMy4yNzcsMjcxLDMxNC45OTMsMjcxeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjI0Ljk5NSwzNjAuOTk4SDc0Ljk5OGMtOC4yODQsMC0xNSw2LjcxNi0xNSwxNXM2LjcxNiwxNSwxNSwxNWgxNDkuOTk3YzguMjg0LDAsMTUtNi43MTYsMTUtMTUNCgkJCVMyMzMuMjc5LDM2MC45OTgsMjI0Ljk5NSwzNjAuOTk4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
            />
            <h4>You should make notes:</h4>
            <p>
              if you think you will see the student again, so that you can
              remember what they have told you and/or track their progress
              <br />if you think the student is at risk and you will need to (a)
              consult someone else about how to support them and (b) have
              evidence of what they told you and how you responded <br />
              All notes should be kept securely; these may be requested under
              Freedom of Information, so be objective.
            </p>
          </div>
        </div></b-tab
      >

      <b-tab title="Assess" class="tabsForSupport second col-12">
        <div class="support">
          <p>
            During your initial conversation with the student it is important to
            <b>form an impression of how serious the situation is</b>, as this
            will determine the action that you take. Having someone listen and
            take them seriously may be sufficient to defuse the situation and/or
            for the student to work out a course of action. On most occasions,
            although the situation may be very distressing for the student at
            the time, it will not be an urgent matter.
          </p>

          <div class="col-4">
            <img
              style="width: 15%"
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0zNjIuNjYgNTkuMDY3Yy0xMi4wMSAwLTIzLjY5MyAxLjQyNy0zNC44OSA0LjEyMS0zMC41MjUtMjMuNzIzLTY4LjMwNi0zNi44NzItMTA3LjI2Ny0zNy4xODItNDcuNTU5LS4zNjUtOTIuMzgxIDE3Ljg2My0xMjYuMTUgNTEuMzY1LTMzLjgxMyAzMy41NDUtNTIuNDM0IDc4LjI2OC01Mi40MzQgMTI1LjkyOSAwIDExLjc4NC0yLjkxNiAyMy41MTktOC40MzMgMzMuOTM1bC0yOS45OTcgNTYuNjI5Yy00Ljg3IDkuMTU5LTQuNjI5IDE5Ljk3Mi42NDUgMjguOTI2IDUuMjc2IDguOTU4IDE0LjYyMSAxNC40MTUgMjQuOTk4IDE0LjU5N2wxMi43MzkuMDAydjQ1LjMzNGMwIDI3LjEwOCAyMi4wMzQgNDkuMTYyIDQ5LjExNiA0OS4xNjJoMzEuOTIzdjEzLjI1N2MwIDIyLjUyOSAxOC4zMTMgNDAuODU3IDQwLjgyMiA0MC44NTdoMTQwLjI5OWMyMi41MDkgMCA0MC44MjItMTguMzI4IDQwLjgyMi00MC44NTd2LTI5LjM1OGMwLTE5LjUwMyAxLjk5OC0zOS4wMDYgNS45NDktNTguMTQ4IDMuOTEzLjMwOSA3Ljg2Ny40NjcgMTEuODU4LjQ2NyA4Mi4zNDcgMCAxNDkuMzQtNjcuMDc0IDE0OS4zNC0xNDkuNTE5IDAtODIuNDQzLTY2Ljk5NC0xNDkuNTE3LTE0OS4zNC0xNDkuNTE3em0tNDcuODA2IDM1Ni43MTh2MjkuMzU4YzAgNS45ODYtNC44NTUgMTAuODU3LTEwLjgyMyAxMC44NTdoLTE0MC4yOTljLTUuOTY4IDAtMTAuODIzLTQuODcxLTEwLjgyMy0xMC44NTd2LTE2LjkyN2MwLTE0LjUxOS0xMS44MDQtMjYuMzMxLTI2LjMxNS0yNi4zMzFoLTM1LjYwN2MtMTAuNTQxIDAtMTkuMTE3LTguNTk2LTE5LjExNy0xOS4xNjJ2LTQ5LjAwNGMwLTE0LjUxOS0xMS44MDQtMjYuMzMxLTI2LjMxNS0yNi4zMzFoLTE1LjI4M2wyOS43MjItNTYuMTEyYzcuODAxLTE0LjcyNiAxMS45MjQtMzEuMzE2IDExLjkyNC00Ny45NzggMC0zOS42MDMgMTUuNDcxLTc2Ljc2MSA0My41NjMtMTA0LjYzMSAyOC4wNDktMjcuODI3IDY1LjI0Mi00Mi45NSAxMDQuNzgzLTQyLjY2NCAyNS44OTIuMjA2IDUxLjE0OSA3LjIzIDczLjE4NyAyMC4xMS00Ny41OTUgMjUuMDI2LTgwLjEzMiA3NS4wMTYtODAuMTMyIDEzMi40NzEgMCA2OC4wNzcgNDUuNjc4IDEyNS42NzMgMTA3Ljk2IDE0My42ODEtNC4yNjYgMjAuOTE0LTYuNDI1IDQyLjIxNS02LjQyNSA2My41MnptNDcuODA2LTg3LjY4Yy02NS44MDQgMC0xMTkuMzQtNTMuNjE2LTExOS4zNC0xMTkuNTE5czUzLjUzNS0xMTkuNTE5IDExOS4zNC0xMTkuNTE5IDExOS4zNDEgNTMuNjE2IDExOS4zNDEgMTE5LjUxOS01My41MzYgMTE5LjUxOS0xMTkuMzQxIDExOS41MTl6Ii8+PHBhdGggZD0ibTM2NS41MDYgMTE0LjcwNWMtMTUuNTczLS43NzktMzAuODE2IDUuMDY4LTQxLjgxNyAxNi4wNzEtNS44NTggNS44NTgtNS44NTggMTUuMzU1IDAgMjEuMjEzIDUuODU3IDUuODU4IDE1LjM1NSA1Ljg1OCAyMS4yMTIgMCA1LjA4OC01LjA4OCAxMS44NzYtNy42OTcgMTkuMDg3LTcuMzIyIDEyLjQzMi42MyAyMi44NTIgMTAuODM3IDIzLjcyMSAyMy4yMzkuNzgxIDExLjE0NC01LjY2NyAyMS4zMTEtMTYuMDQ2IDI1LjI5OS0xNC4zNTggNS41MTgtMjQuMDA0IDE5Ljc0Mi0yNC4wMDQgMzUuMzk2IDAgOC4yODQgNi43MTYgMTUgMTUgMTVzMTUtNi43MTYgMTUtMTVjMC0zLjMyNiAxLjkxNS02LjI5NyA0Ljc2Ny03LjM5MyAyMi43Ny04Ljc1IDM2LjkxOS0zMS4wMTQgMzUuMjA5LTU1LjQtMS45NDItMjcuNzI3LTI0LjM1My00OS42OTYtNTIuMTI5LTUxLjEwM3oiLz48cGF0aCBkPSJtMzYyLjY2IDI1Ni45NGMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNXYxNS41OTljMCA4LjI4NCA2LjcxNiAxNSAxNSAxNXMxNS02LjcxNiAxNS0xNXYtMTUuNTk5Yy0uMDAxLTguMjg0LTYuNzE2LTE1LTE1LTE1eiIvPjwvc3ZnPg=="
            />
            <h5>Ask Yourself</h5>
            <p>
              Is the student or other people at high risk of harm (e.g. self
              harm or suicide)? <br />Is anyone else at risk through coercive
              behaviours (e.g. relationship abuse or initiations)?<br />
              Are the risks immediate?<br />
              Is specialist help required? <br />Is there a need to act
              quickly?<br />
              Is there a need to inform or consult with someone else? <br />A
              prompt response is required if:<br />
              a student may be at risk of hurting themselves or someone else
              <br />their behaviour appears to be significantly out of
              character.
            </p>
          </div>

          <div class="col-6 urgent">
            <img
              style="width: 10%"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnIGlkPSJfMTYtZXhwcmVzcyIgZGF0YS1uYW1lPSIxNi1leHByZXNzIj48ZyBpZD0ibGluZWFyX2NvbG9yIiBkYXRhLW5hbWU9ImxpbmVhciBjb2xvciI+PHBhdGggZD0iTTQ1OS42MTgsMTQ5LjM1M2wxMi44NjctMTIuODY4YTEyLDEyLDAsMSwwLTE2Ljk3LTE2Ljk3bC0xMy4zOTIsMTMuMzkyQTE3OS40NDQsMTc5LjQ0NCwwLDAsMCwzNjQsOTUuNjE5VjY4aDEyYTEyLDEyLDAsMCwwLDEyLTEyVjE2QTEyLDEyLDAsMCwwLDM3Niw0SDI4MGExMiwxMiwwLDAsMC0xMiwxMlY1NmExMiwxMiwwLDAsMCwxMiwxMmgxMlY5NS42MTlhMTc5LjQ0NCwxNzkuNDQ0LDAsMCwwLTc4LjEyMywzNy4yODhsLTEzLjM5Mi0xMy4zOTJhMTIsMTIsMCwxLDAtMTYuOTcsMTYuOTdsMTIuODY3LDEyLjg2OEExNzkuMzI3LDE3OS4zMjcsMCwwLDAsMTQ4LDI3MmMwLDk5LjI1Miw4MC43NDgsMTgwLDE4MCwxODBzMTgwLTgwLjc0OCwxODAtMTgwQTE3OS4zMjcsMTc5LjMyNywwLDAsMCw0NTkuNjE4LDE0OS4zNTNaTTI5MiwyOGg3MlY0NEgyOTJabTI0LDQwaDI0VjkyLjQxYy0zLjk2OC0uMjYzLTcuOTY3LS40MS0xMi0uNDFzLTguMDMyLjE0Ny0xMiwuNDFabTEyLDM2MGMtODYuMDE5LDAtMTU2LTY5Ljk4MS0xNTYtMTU2czY5Ljk4MS0xNTYsMTU2LTE1NiwxNTYsNjkuOTgxLDE1NiwxNTZTNDE0LjAxOSw0MjgsMzI4LDQyOFoiLz48cGF0aCBkPSJNMzI4LDE0MGMtNzIuNzg1LDAtMTMyLDU5LjIxNS0xMzIsMTMyczU5LjIxNSwxMzIsMTMyLDEzMiwxMzItNTkuMjE1LDEzMi0xMzJTNDAwLjc4NSwxNDAsMzI4LDE0MFpNNDM1LjMzLDI2MEgzNDBWMTY0LjY3QTEwOC4yLDEwOC4yLDAsMCwxLDQzNS4zMywyNjBaTTMyOCwzODBhMTA4LDEwOCwwLDAsMS0xMi0yMTUuMzNWMjcyYTEyLDEyLDAsMCwwLDEyLDEySDQzNS4zM0ExMDguMTUxLDEwOC4xNTEsMCwwLDEsMzI4LDM4MFoiLz48cGF0aCBkPSJNMTM2LDE4OEg1NmExMiwxMiwwLDAsMCwwLDI0aDgwYTEyLDEyLDAsMCwwLDAtMjRaIi8+PHBhdGggZD0iTTEzMiwyOTZhMTIsMTIsMCwwLDAtMTItMTJINDBhMTIsMTIsMCwwLDAsMCwyNGg4MEExMiwxMiwwLDAsMCwxMzIsMjk2WiIvPjxwYXRoIGQ9Ik0xMjgsMzMySDcyYTEyLDEyLDAsMCwwLDAsMjRoNTZhMTIsMTIsMCwwLDAsMC0yNFoiLz48cGF0aCBkPSJNMTMyLDI0OGExMiwxMiwwLDAsMC0xMi0xMkgxNmExMiwxMiwwLDAsMCwwLDI0SDEyMEExMiwxMiwwLDAsMCwxMzIsMjQ4WiIvPjwvZz48L2c+PC9zdmc+Cg=="
            />
            <p>
              Discuss your concerns with your manager or with a member of the
              Student Health and Wellbeing Services by calling the Wellbeing
              Consultancy Service on +44 (0)191 208 3333.
              <br />In the case of an immediate risk, call the emergency
              services directly, on <b>999</b> and then inform Security of the
              situation on <b>+44 (0)191 208 6666</b> <br /><b>Out of hours:</b
              ><br />
              If the concern cannot wait until the next working day please call
              Security on <b>+44 (0)191 208 6817</b> who will take appropriate
              action.
            </p>
          </div>
        </div></b-tab
      >
      <b-tab title="Action" class="tabsForSupport second col-12">
        <div class="support">
          
          <div class="col-4">

            <h5>
              <b> As an academic, you can: </b>
            </h5>
            <p>
              help with academic adjustments <br />arrange follow-up contact
              with the student <br />help to resolve conflict with other
              students <br />
              Offer information <br />
              Signpost a student by sharing information with the student about
              resources and services which you think might help them, and
              encouraging them to access these.</p>
            <p>Where a student is disturbing
            others or there are concerns about the student’s physical or mental
            wellbeing, but there does not appear to be an immediate risk, try to
            calm the student down by encouraging them to talk about what is
            distressing them, and then suggest where further help is available.</p>
          </div>
          <div class="col-3">
            <img
              style="width: 20%"
              src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ0Ni42NiAxMDcuNTYtMzItNDhhOC4wMzMgOC4wMzMgMCAwIDAgLTYuNjYtMy41NmgtMTIwdi00MGE4IDggMCAwIDAgLTgtOGgtNDhhOCA4IDAgMCAwIC04IDh2NDBoLTg4YTggOCAwIDAgMCAtOCA4djk2YTggOCAwIDAgMCA4IDhoODh2MzJoLTEyMGE4LjAzMyA4LjAzMyAwIDAgMCAtNi42NiAzLjU2bC0zMiA0OGE4LjAxMyA4LjAxMyAwIDAgMCAwIDguODhsMzIgNDhhOC4wMzMgOC4wMzMgMCAwIDAgNi42NiAzLjU2aDEyMHYxNzZoLTgwYTggOCAwIDAgMCAwIDE2aDE5MmE4IDggMCAwIDAgMC0xNmgtNDh2LTE3Nmg4OGE4IDggMCAwIDAgOC04di05NmE4IDggMCAwIDAgLTgtOGgtODh2LTMyaDEyMGE4LjAzMyA4LjAzMyAwIDAgMCA2LjY2LTMuNTZsMzItNDhhOC4wMTMgOC4wMTMgMCAwIDAgMC04Ljg4em0tMjA2LjY2LTgzLjU2aDMydjMyaC0zMnptMzIgNDY0aC0zMnYtMTc2aDMyem05Ni0yNzJ2ODBoLTI1OS43MmwtMjYuNjctNDAgMjYuNjctNDB6bS0xMjgtMTZ2LTMyaDMydjMyem0xNjMuNzItNDhoLTI1OS43MnYtODBoMjU5LjcybDI2LjY3IDQweiIvPjxwYXRoIGQ9Im0zNjggNDg4aC04YTggOCAwIDAgMCAwIDE2aDhhOCA4IDAgMCAwIDAtMTZ6Ii8+PC9nPjwvc3ZnPg=="
            />
            <p>
              <b>A student should be directed elsewhere for support when: </b
              ><br /> the problem needs specialist help <br /> the problem is
              complex or serious <br /> the situation needs more time than you
              can offer <br /> the student appears to be at risk to themselves
              or others<br />
              the student is requesting support from a particular service
            </p>
          </div>
          <div class="col-4 urgent">
            <h4 style="text-transform:uppercase;">Aid for Sexual Assault </h4>
            <p>
              If a student is a victim of a sexual crime and wants to report it
              to the police, they should ring 999 in an emergency, or 101 in a
              non-emergency. <br/> <br/> Encourage the student to seek support from
              REACH, the local Sexual Assault Referral Centre; REACH staff offer
              support whether or not the student wishes to report the assault to
              the police and can be contacted on +44 (0)191 221 9222. <br /><br/>They
              can also receive support from Rape Crisis Tyneside and
              Northumberland on 0800 035 2794.
            </p>
          </div>
          <div class="col-3 ">
            <img
              style="width: 13%;"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDkuMDQyLDM1NS44NjJsLTI0LjQwOS0yNC4yMWMtMy45MjMtMy44OTEtMTAuMjU1LTMuODY0LTE0LjE0NSwwLjA1OGMtMy44OTEsMy45MjItMy44NjQsMTAuMjU1LDAuMDU4LDE0LjE0NQ0KCQkJbDI0LjQwOCwyNC4yMWMxLjk1LDEuOTM1LDQuNDk3LDIuOTAxLDcuMDQzLDIuOTAxYzIuNTczLDAsNS4xNDYtMC45ODcsNy4xMDEtMi45NTkNCgkJCUM1MTIuOTksMzY2LjA4NSw1MTIuOTY0LDM1OS43NTIsNTA5LjA0MiwzNTUuODYyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDU5Ljc2MiwzMDYuODgxYy0zLjkwNi0zLjkwNi0xMC4yMzctMy45MDYtMTQuMTQ1LDBsLTAuMDE3LDAuMDE3Yy0zLjkwNiwzLjkwNi0zLjg5NywxMC4yMzEsMC4wMDksMTQuMTM3DQoJCQljMS45NSwxLjk1MSw0LjUwOSwyLjkyNiw3LjA2NywyLjkyNmMyLjU2NCwwLDUuMTMtMC45NzksNy4wODUtMi45MzRDNDYzLjY2NywzMTcuMTIxLDQ2My42NjcsMzEwLjc4OCw0NTkuNzYyLDMwNi44ODF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNzQuNDkzLDM1M2w5Ny4wMjgtOTcuMDI3YzE0LjY5NS0xNC42OTYsMTQuNjk1LTM4LjYwOC0wLjAwMS01My4zMDRjLTUuMTgyLTUuMTgyLTExLjUxMS04LjUyOC0xOC4xNzctMTAuMDU1DQoJCQljMi4yODYtNC45MTQsMy40OTYtMTAuMzA3LDMuNDk2LTE1Ljg4OGMwLTEwLjA2OC0zLjkyMS0xOS41MzMtMTEuMDM5LTI2LjY1MWMtNS41ODMtNS41ODQtMTIuNjEyLTkuMTktMjAuMjQxLTEwLjQ4OQ0KCQkJYzQuMjk1LTEzLjA4NiwxLjI1OS0yOC4wNzMtOS4xMjgtMzguNDU5Yy01LjcxMS01LjcxLTEyLjgxNC05LjE5LTIwLjIyNy0xMC40NjJjMS4yNDItMy43NjksMS44OTctNy43NDksMS44OTctMTEuODMzDQoJCQljMC0xMC4wNjgtMy45MjEtMTkuNTMzLTExLjAzOS0yNi42NTFjLTcuMTE5LTcuMTE4LTE2LjU4NC0xMS4wMzktMjYuNjUxLTExLjAzOWMtNi4zOTMsMC0xMi41NCwxLjU4Ni0xOC4wMDEsNC41NjRsLTAuOTY1LTEuMDM3DQoJCQljLTEyLjU0Mi0xMy40NzgtMzAuMjk1LTIxLjIwNy00OC43MDQtMjEuMjA3aC03OC41NGMtNS41MjMsMC0xMC4wMDIsNC40NzktMTAuMDAyLDEwLjAwMnYxMy4xMTYNCgkJCWMwLDUuMjQ5LDAuODg4LDEwLjM1OSwyLjU4NiwxNS4xNjRjLTQuNTI0LTEuODc5LTkuNDE5LTIuODY2LTE0LjQ2NS0yLjg2NmMtMTAuMDY4LDAtMTkuNTMzLDMuOTIxLTI2LjY1MiwxMS4wMzkNCgkJCWMtMTAuMzkyLDEwLjM5Mi0xMy40MjUsMjUuMzktOS4xMiwzOC40OGMtNy40MTksMS4yNjktMTQuNTMyLDQuNzUxLTIwLjI0OCwxMC40NjZjLTcuMTE4LDcuMTE5LTExLjAzOSwxNi41ODQtMTEuMDM5LDI2LjY1MQ0KCQkJYzAsNC4wNzYsMC42NTMsOC4wNSwxLjg5LDExLjgxMWMtNy42MiwxLjMwMy0xNC42NDIsNC45MDctMjAuMjIsMTAuNDg2Yy0xMS40NzcsMTEuNDc3LTEzLjk5LDI4LjU3Ny03LjUzOSw0Mi41MTYNCgkJCWMtNi44MzEsMS41NjEtMTMuMTA1LDUuMDAxLTE4LjE4MywxMC4wNzhjLTE0LjY5NSwxNC42OTUtMTQuNjk1LDM4LjYwNywwLDUzLjMwM2wxOS45NTQsMTkuOTUzTDIuOTI5LDM5MS44OTMNCgkJCWMtMy45MDYsMy45MDYtMy45MDYsMTAuMjM5LDAsMTQuMTQ2YzEuOTUzLDEuOTUyLDQuNTEzLDIuOTMsNy4wNzIsMi45M3M1LjExOS0wLjk3Nyw3LjA3Mi0yLjkzbDk5LjE4Mi05OS4xODINCgkJCWM1LjYxNSwzLjIwNCwxMS45ODcsNC45MTgsMTguNjI4LDQuOTE4YzEwLjA2NywwLDE5LjUzMi0zLjkyMSwyNi42NTEtMTEuMDRjNy43MzQtNy43MzMsMTEuMzkyLTE4LjAyLDEwLjk4NS0yOC4xNzINCgkJCWMwLjUwNywwLjAyMSwxLjAxNCwwLjAzNiwxLjUyMSwwLjAzNmM5LjY1LTAuMDAxLDE5LjMwNS0zLjY3NSwyNi42NTEtMTEuMDIxYzcuMTE4LTcuMTE5LDExLjAzOS0xNi41ODQsMTEuMDM5LTI2LjY1MQ0KCQkJYzAtMC41MDktMC4wMTctMS4wMTUtMC4wMzctMS41MjFjMC41MDEsMC4wMiwxLjAwMiwwLjAzNiwxLjUwNCwwLjAzNmM5LjY1MSwwLDE5LjMwNC0zLjY3NCwyNi42NTEtMTEuMDIxDQoJCQljNy4xMTgtNy4xMTksMTEuMDM5LTE2LjU4NCwxMS4wMzktMjYuNjUxYzAtMC41MDktMC4wMTctMS4wMTUtMC4wMzctMS41MjFjMC41MDEsMC4wMiwxLjAwMiwwLjAzNiwxLjUwNCwwLjAzNg0KCQkJYzkuNjUyLDAsMTkuMzA0LTMuNjc0LDI2LjY1MS0xMS4wMjFjMTMuODA4LTEzLjgwOCwxNC42MzktMzUuNzUxLDIuNS01MC41NDJsNjYuMzk0LTY2LjM5NGMzLjM0MS0zLjM0Miw3Ljc4MS01LjE4MSwxMi41MDYtNS4xODENCgkJCXM5LjE2NiwxLjgzOSwxMi41MDcsNS4xODFjMy4zNDEsMy4zNDEsNS4xOCw3Ljc4MSw1LjE4LDEyLjUwNmMwLDQuNzI0LTEuODM5LDkuMTY2LTUuMTgxLDEyLjUwNmwtOS43ODksOS43ODlsLTM1LjUxOCwzNS41MTgNCgkJCWMtMy45MDYsMy45MDYtMy45MDYsMTAuMjM5LDAsMTQuMTQ2YzEuOTUzLDEuOTUyLDQuNTEzLDIuOTMsNy4wNzIsMi45M3M1LjExOS0wLjk3Nyw3LjA3Mi0yLjkzbDM1LjUxOC0zNS41MTgNCgkJCWM2Ljg5NS02Ljg5NiwxOC4xMTYtNi44OTcsMjUuMDEzLTAuMDAxYzYuODk2LDYuODk3LDYuODk2LDE4LjExNywwLDI1LjAxNGwtOS43OSw5Ljc5bC0yNS43MjgsMjUuNzI4DQoJCQljLTMuOTA2LDMuOTA2LTMuOTA2LDEwLjIzOSwwLDE0LjE0NmMxLjk1MywxLjk1Miw0LjUxMywyLjkzLDcuMDcyLDIuOTNzNS4xMTktMC45NzcsNy4wNzItMi45M2wyNS43MjgtMjUuNzI4DQoJCQljMy4zNDEtMy4zNDIsNy43ODItNS4xODEsMTIuNTA2LTUuMTgxYzQuNzI1LDAsOS4xNjYsMS44MzksMTIuNTA3LDUuMTgxYzMuMzQxLDMuMzQxLDUuMTgsNy43ODEsNS4xOCwxMi41MDYNCgkJCWMwLDQuNzI0LTEuODM5LDkuMTY2LTUuMTgxLDEyLjUwNmwtMTMuNDM3LDEzLjQzN2wtMTIuMjkxLDEyLjI5MWMtMy45MDYsMy45MDYtMy45MDYsMTAuMjM5LDAsMTQuMTQ2DQoJCQljMS45NTMsMS45NTIsNC41MTMsMi45Myw3LjA3MiwyLjkzczUuMTE5LTAuOTc3LDcuMDcyLTIuOTNsMTIuMy0xMi4zYzYuODk3LTYuODg1LDE4LjExMS02Ljg4NCwyNS4wMDQsMC4wMDkNCgkJCWM2Ljg5Nyw2Ljg5Niw2Ljg5NywxOC4xMTcsMCwyNS4wMTRsLTk3LjAyOCw5Ny4wMjdjLTI0LjM2NCwyNC4zNjUtNTYuNzQ1LDM4LjQ3LTkxLjE3OCwzOS43Mg0KCQkJYy0yLjUzMSwwLjA5Mi00LjkzNSwxLjE0MS02LjcyMywyLjkzN2wtODkuNjMyLDg5Ljk2NGMtMy44OTksMy45MTMtMy44ODgsMTAuMjQ2LDAuMDI2LDE0LjE0NQ0KCQkJYzEuOTUxLDEuOTQ0LDQuNTA1LDIuOTE3LDcuMDU5LDIuOTE3YzIuNTY1LDAsNS4xMzItMC45ODEsNy4wODUtMi45NDNsNjUuOTI3LTY2LjE3YzE2Ljc0NiwxMC43NDMsMzYuNDQsMTUuODUxLDU2LjQ2NSwxNC41MjcNCgkJCWw1MS41OTgsNTEuNTk5YzEuOTUzLDEuOTUyLDQuNTEzLDIuOTMsNy4wNzIsMi45M2MyLjU2LDAsNS4xMTktMC45NzcsNy4wNzItMi45M2MzLjkwNi0zLjkwNiwzLjkwNi0xMC4yMzksMC0xNC4xNDYNCgkJCWwtNTQuODYtNTQuODY2Yy0yLjA3Ny0yLjA3Ni00Ljk2My0zLjEzNy03Ljg5LTIuODk3bC0zLjE3MSwwLjI2Yy0xNC42MzcsMS4yLTI5LjEwNS0yLjAwNi00MS43MzctOS4wODVsNi40MjgtNi40NTENCgkJCUMzMTEuODk0LDM5Ni4wMjYsMzQ3LjQ4NiwzODAuMDA4LDM3NC40OTMsMzUzeiBNMTQ3LjM5LDI4Ni41OTFjLTMuMzQxLDMuMzQyLTcuNzgzLDUuMTgxLTEyLjUwNiw1LjE4MQ0KCQkJYy00LjcyNSwwLTkuMTY2LTEuODM5LTEyLjUwNi01LjE4MWwtMjcuMDI2LTI3LjAyNWMtNi44OTYtNi44OTYtNi44OTYtMTguMTE3LDAtMjUuMDE0YzMuMzQxLTMuMzQyLDcuNzgzLTUuMTgxLDEyLjUwNy01LjE4MQ0KCQkJYzQuNzI0LDAsOS4xNjYsMS44MzksMTIuNTA2LDUuMTgxbDI3LjAyNiwyNy4wMjVDMTU0LjI4NiwyNjguNDczLDE1NC4yODYsMjc5LjY5NCwxNDcuMzksMjg2LjU5MXogTTE4Ni41NDksMjQ3LjQzMg0KCQkJYy02Ljg5Nyw2Ljg5Ni0xOC4xMiw2Ljg5Ni0yNS4wMTQsMGwtMjcuMDI2LTI3LjAyNmwtMTMuNDM4LTEzLjQzOGMtNi44OTYtNi44OTYtNi44OTYtMTguMTE3LDAtMjUuMDEzDQoJCQljMy4zNDEtMy4zNDIsNy43ODMtNS4xODEsMTIuNTA2LTUuMTgxYzQuNzI1LDAsOS4xNjYsMS44MzksMTIuNTA2LDUuMTgxbDQwLjQ2Myw0MC40NjNjMCwwLDAsMCwwLjAwMSwwDQoJCQljMy4zNDIsMy4zNDIsNS4xODEsNy43ODMsNS4xODEsMTIuNTA3UzE4OS44ODksMjQ0LjA5MSwxODYuNTQ5LDI0Ny40MzJ6IE0yMjUuNzA2LDIwOC4yNzRjLTYuODk3LDYuODk1LTE4LjExOSw2Ljg5Ni0yNS4wMTQsMA0KCQkJbC01MC4yNTMtNTAuMjUzYy0zLjM0MS0zLjM0MS01LjE4LTcuNzgxLTUuMTgtMTIuNTA2YzAtNC43MjQsMS44MzktOS4xNjYsNS4xODEtMTIuNTA2YzMuNDQ4LTMuNDQ4LDcuOTc4LTUuMTcyLDEyLjUwNi01LjE3Mg0KCQkJYzQuNTI2LDAsOS4wNTEsMS43MjIsMTIuNDk4LDUuMTY0bDIyLjkwNCwyMi45MDRsMjcuMzU2LDI3LjM1NmgwLjAwMWMzLjM0LDMuMzQxLDUuMTc5LDcuNzgxLDUuMTc5LDEyLjUwNg0KCQkJQzIzMC44ODYsMjAwLjQ5MiwyMjkuMDQ3LDIwNC45MzQsMjI1LjcwNiwyMDguMjc0eiBNMjY0Ljg2NCwxNjkuMTE2Yy02Ljg5Niw2Ljg5Ni0xOC4xMTcsNi44OTYtMjUuMDEzLDBsLTUwLjI1My01MC4yNTMNCgkJCWMtMC4wMDUtMC4wMDUtMC4wMTEtMC4wMS0wLjAxNy0wLjAxNmwtOS43NzMtOS43NzNjLTYuODk2LTYuODk3LTYuODk2LTE4LjExNywwLTI1LjAxNGMzLjQ0OC0zLjQ0OSw3Ljk3OC01LjE3MywxMi41MDctNS4xNzMNCgkJCWM0LjUyOSwwLDkuMDU5LDEuNzI0LDEyLjUwNiw1LjE3M2w2MC4wNDEsNjAuMDQxYzMuMzQyLDMuMzQxLDUuMTgxLDcuNzgyLDUuMTgxLDEyLjUwNg0KCQkJQzI3MC4wNDQsMTYxLjMzMywyNjguMjA2LDE2NS43NzYsMjY0Ljg2NCwxNjkuMTE2eiBNMjY3LjQ5NCwxMTguNDQ0bC0yNy40NzItMjcuNDcyYzMuMTE1LDAuNjY1LDYuMzE4LDEuMDE4LDkuNTc4LDEuMDE3DQoJCQljMC4wNzMsMCwwLjE0NywwLDAuMjIxLDBsMjcuNDQ4LTAuMTI5YzUuNTIzLTAuMDI2LDkuOTgxLTQuNTI1LDkuOTU1LTEwLjA0OWMtMC4wMjYtNS41MDgtNC40OTktOS45NTUtMTAuMDAxLTkuOTU1DQoJCQljLTAuMDE2LDAtMC4wMzIsMC0wLjA0OCwwbC0yNy40NDgsMC4xMjljLTAuMDQyLDAtMC4wODIsMC0wLjEyNCwwYy02Ljc2MywwLTEzLjEyNC0yLjYyNS0xNy45Mi03LjM5OA0KCQkJYy00LjgyNi00LjgwNC03LjQ4My0xMS4xOTgtNy40ODMtMTguMDA4di0zLjExNGg2OC41MzhjMTIuODc1LDAsMjUuMjksNS40MDUsMzQuMDYyLDE0LjgzMWwwLjQwNywwLjQzN0wyNjcuNDk0LDExOC40NDR6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            />
            <p>Our online <b>Report and Support tool </b> enables anyone to report
            concerns anonymously, make a formal complaint and/or receive
            support. If you have experienced or are aware of, sexual violence,
            sexual harassment or initiations behaviours affecting a Newcastle
            University student, you can report these directly to us via this
            tool:</p> <a href="https://reportandsupport.ncl.ac.uk/">reportandsupport.ncl.ac.uk </a>
        </div>
          <div class="col-8">
            <p><br/>
            <b>Confidentiality needs to be respected at all times and
            sensitive information shared only with the explicit informed consent
            of the student.</b>  <br /> <b>Confidentiality can be broken: </b><br /> when a
            student is alerting you to a clear and present danger to self or a
            third party i.e. suicide, radicalisation, domestic abuse, child
            abuse <br />if there is an issue around child protection<br />
            disclosure of information relating to an act of terrorism or
            terrorist related activity 
            <br/>If you are unsure about the best course of action, seek advice from your manager in the first instance.<br />A
            case can be discussed hypothetically without revealing names. 
            <br/><b>If you
            are seriously concerned about a student’s welfare, you or they
            should contact the appropriate emergency services.</b></p>
          </div>
        </div></b-tab
      >
      <b-tab title="Follow Up" class="tabsForSupport"
        >
        <div class="col-6" style="margin-left:auto; margin-right:auto;">
<img style="width:12%" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIuMDMgNTEyLjAzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wMyA1MTIuMDMiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IkZlZWRiYWNrIj48Zz48cGF0aCBkPSJtOTAuMDE1IDkwaDMwdjMwaC0zMHoiLz48L2c+PGc+PHBhdGggZD0ibTE1MC4wMTUgOTBoMzB2MzBoLTMweiIvPjwvZz48Zz48cGF0aCBkPSJtMjEwLjAxNSA5MGgzMHYzMGgtMzB6Ii8+PC9nPjxnPjxwYXRoIGQ9Im0uMDE1IDI2NC4yNzF2LTI2NC4yNzFoMzMwdjIxMGgtMjIxLjQ1OXptMzAtMjM0LjI3MXYxODUuNzI5bDcxLjQ1OS0zNS43MjloMTk4LjU0MXYtMTUweiIvPjwvZz48Zz48cGF0aCBkPSJtMzkyLjAxNSAzMzloMzB2MzBoLTMweiIvPjwvZz48Zz48cGF0aCBkPSJtMzMyLjAxNSAzMzloMzB2MzBoLTMweiIvPjwvZz48Zz48cGF0aCBkPSJtMjcyLjAxNSAzMzloMzB2MzBoLTMweiIvPjwvZz48Zz48cGF0aCBkPSJtNTEyLjAxNSA1MTIuMDMtMTA4LjQ3MS01My4wM2gtMjIxLjUyOXYtMjEwaDMzMHptLTMwMC04My4wM2gxOTguNDcxbDcxLjUyOSAzNC45N3YtMTg0Ljk3aC0yNzB6Ii8+PC9nPjwvZz48L3N2Zz4=" />        <p>
          This stage gives the student an opportunity to let you know of their
          progress and any additional support they might need. It also gives you
          an opportunity to check they are still on track, accessing support and
          taking any action that you agreed would be helpful. <br /><b>Following
          up: </b><br />should ideally be agreed in advance with the student so
          they know when and how you will follow up with them; <br />enables
          you to go home with a clear mind and you are both aware of your role
          in this situation; <br />relieves the pressure to have covered
          everything in the initial meeting. <br/> The time in between the initial
          interaction and the follow up gives you an opportunity to think a bit
          more about what might be useful and prepare for the student meeting can be done by phone, email or face-to-face.
        </p>
        </div>
        </b-tab
      >
    </b-tabs>
  </div>
</template>
<style>

.nav-tabs a{
  color: #003a6550;
  font-size: 1.5rem;
}
.nav-tabs a:hover {
  color: #003a65;
}
.nav-link.active {
  color: #003a65;
}
header {
  margin-left: 20%;
  margin-right: 20%;
}
.support {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #000;
}
.row {
  display: flex;
  justify-content: center;
}
.urgent {
  border: solid #940000 3px;
  border-radius: 10px;
  padding-top: 2%;
  background-color: #94000020;
  color: #000;
}
</style>
