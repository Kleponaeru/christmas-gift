import React from "react";

const SnowGlobe: React.FC = () => {
  const sgSize = 400;
  const treeSize = 50;
  const zzSize = treeSize * 2;
  const starSize = 20;

  const snowPattern = {
    background: `
      linear-gradient(135deg, #dbe8fc 25%, transparent 25%) ${
        zzSize * -0.16
      }px 0,
      linear-gradient(225deg, #dbe8fc 25%, transparent 25%) ${
        zzSize * -0.16
      }px 0,
      linear-gradient(315deg, #dbe8fc 25%, transparent 25%),
      linear-gradient(45deg, #dbe8fc 25%, transparent 25%)
    `,
    backgroundSize: `${zzSize * 0.32}px ${zzSize * 0.32}px`,
    width: "100%",
    height: "100%",
    position: "absolute" as const,
  };

  return (
    <div style={{ position: "relative", width: sgSize, height: sgSize + 150 }}>
      {/* Ground */}
      {/* <div
        style={{
          width: "100%",
          height: 150,
          position: "absolute",
          top: sgSize,
          background:
            "radial-gradient(ellipse at center, rgba(1,1,1,1) 0%, rgba(1,1,1,0.7) 10%, rgba(1,1,1,0) 20%), linear-gradient(to bottom, rgba(37,5,6,1) 0%, rgba(99,19,7,1) 40%, rgba(164,65,33,1) 100%)",
        }}
      /> */}

      {/* Snowglobe Container */}
      <div
        style={{
          width: sgSize,
          height: sgSize,
          margin: "auto",
          position: "relative",
        }}
      >
        {/* Background glass layer */}
        <div
          style={{
            width: sgSize,
            height: sgSize,
            borderRadius: "100%",
            position: "absolute",
            top: 0,
            background: "rgba(255, 255, 255, 0.5)",
          }}
        />

        {/* Ground snow gradient */}
        <div
          style={{
            width: sgSize * 0.95,
            height: sgSize * 0.95,
            borderRadius: "100%",
            position: "absolute",
            top: sgSize * 0.025,
            left: sgSize * 0.025,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 68%, rgba(240,240,240,1) 68%, rgba(235,239,245,1) 79%, rgba(197,211,232,1) 100%)",
          }}
        >
          {/* Snow surface */}
          <div
            style={{
              width: sgSize * 0.89,
              height: sgSize * 0.1,
              background: "#fff",
              position: "relative",
              top: sgSize * 0.59,
              borderRadius: "100%",
              margin: "auto",
            }}
          />
        </div>

        {/* Tree */}
        <div
          style={{
            width: treeSize * 2,
            height: treeSize * 4.1,
            position: "relative",
            left: sgSize * 0.5,
            top: sgSize * 0.15,
          }}
        >
          {/* Tree shadow */}
          <div
            style={{
              width: treeSize * 4,
              height: 20,
              background:
                "radial-gradient(ellipse at center, rgba(13,84,102,1) 0%, rgba(138,174,188,0) 65%, rgba(206,223,235,0) 100%)",
              position: "absolute",
              bottom: treeSize * -0.2,
              left: treeSize * -0.7,
            }}
          />

          {/* Bottom branch */}
          <div
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              width: treeSize * 2,
              height: treeSize * 2.5,
              backgroundColor: "#142833",
              position: "absolute",
              top: treeSize * 1.6,
            }}
          >
            <div style={snowPattern} />
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                background:
                  "linear-gradient(to bottom, rgba(18, 67, 79, 1) 0%, rgba(255,255,255,0) 100%)",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* Middle branch */}
          <div
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              width: treeSize * 1.5,
              height: treeSize * 2.3,
              backgroundColor: "#2D4959",
              position: "absolute",
              top: treeSize * 0.7,
              left: treeSize * 0.25,
            }}
          >
            <div style={snowPattern} />
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                background:
                  "linear-gradient(to bottom, rgba(18, 67, 79, 1) 0%, rgba(255,255,255,0) 100%)",
                mixBlendMode: "multiply",
              }}
            />
          </div>

          {/* Top branch */}
          <div
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              width: treeSize * 0.8,
              height: treeSize * 1.5,
              backgroundColor: "#62838C",
              position: "absolute",
              top: treeSize * 0.1,
              left: treeSize * 0.6,
            }}
          >
            <div style={snowPattern} />
          </div>

          {/* Star */}
          <div
            style={{
              width: 0,
              height: 0,
              borderRight: `${starSize}px solid transparent`,
              borderBottom: `${starSize * 0.7}px solid gold`,
              borderLeft: `${starSize}px solid transparent`,
              transform: "rotate(35deg)",
              position: "absolute",
              top: 0,
              left: treeSize * 0.6,
            }}
          >
            <div
              style={{
                borderBottom: `${starSize * 0.8}px solid gold`,
                borderLeft: `${starSize * 0.3}px solid transparent`,
                borderRight: `${starSize * 0.3}px solid transparent`,
                position: "absolute",
                height: 0,
                width: 0,
                top: starSize * -0.45,
                left: starSize * -0.65,
                transform: "rotate(-35deg)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: starSize * 0.03,
                left: starSize * -1.05,
                width: 0,
                height: 0,
                borderRight: `${starSize}px solid transparent`,
                borderBottom: `${starSize * 0.7}px solid gold`,
                borderLeft: `${starSize}px solid transparent`,
                transform: "rotate(-70deg)",
              }}
            />
          </div>

          {/* Baubles */}
          <div
            style={{
              width: sgSize * 0.04,
              height: sgSize * 0.04,
              backgroundColor: "rgba(191, 17, 49,1)",
              borderRadius: "100%",
              position: "absolute",
              top: sgSize * 0.1,
              left: sgSize * 0.1,
              boxShadow: `${sgSize * 0.02}px ${
                sgSize * 0.11
              }px 0px 0px rgba(150, 0, 40,1), ${sgSize * -0.02}px ${
                sgSize * 0.2
              }px 0px 0px rgba(206, 0, 55,1), ${sgSize * 0.05}px ${
                sgSize * 0.25
              }px 0px 0px rgba(206, 0, 37,1), ${sgSize * -0.06}px ${
                sgSize * 0.33
              }px 0px 0px rgba(191, 17, 49,1), ${sgSize * 0.08}px ${
                sgSize * 0.35
              }px 0px 0px rgba(191, 17, 49,1)`,
            }}
          />
        </div>

        {/* Snowman shadow */}
        <div
          style={{
            width: treeSize * 2,
            height: 20,
            background:
              "radial-gradient(ellipse at center, rgba(13,84,102,0.4) 0%, rgba(138,174,188,0) 65%, rgba(206,223,235,0) 100%)",
            position: "absolute",
            bottom: treeSize * 2.5,
            left: treeSize * 1.8,
          }}
        />

        {/* Snowman bottom */}
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, #dbe8fc 100%)",
            width: sgSize * 0.15,
            height: sgSize * 0.15,
            borderRadius: "50%",
            position: "absolute",
            bottom: sgSize * 0.33,
            left: sgSize * 0.25,
          }}
        />

        {/* Snowman top */}
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, #dbe8fc 100%)",
            width: sgSize * 0.1,
            height: sgSize * 0.1,
            borderRadius: "50%",
            position: "absolute",
            bottom: sgSize * 0.46,
            left: sgSize * 0.27,
          }}
        />

        {/* Coal buttons and eyes */}
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            position: "absolute",
            boxShadow:
              "120px -10px 0px 0px black, 137px -12px 0px 0px black, 119px 0px 0px 0px black, 125px 2px 0px 0px black, 132px 2px 0px 0px black, 138px -2px 0px 0px black, 130px 15px 0px 0px black, 132px 27px 0px 0px black, 132px 39px 0px 0px black",
          }}
        />

        {/* Carrot nose */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "20px solid #f98e13",
            borderTop: "3px solid transparent",
            borderBottom: "3px solid transparent",
            position: "absolute",
            left: 130,
            top: 198,
          }}
        />

        {/* Falling snow wrapper */}
        <div
          style={{
            overflow: "hidden",
            opacity: 0.99,
            height: sgSize * 0.65,
            width: sgSize,
            position: "absolute",
            top: 0,
          }}
        >
          <div
            style={{
              width: sgSize * 0.95,
              height: sgSize * 0.95,
              borderRadius: "100%",
              position: "absolute",
              top: sgSize * 0.025,
              left: sgSize * 0.025,
              overflow: "hidden",
              opacity: 0.99,
            }}
          >
            {/* Flakes layer 1 */}
            <div
              style={{
                width: sgSize,
                height: sgSize * 2,
                position: "absolute",
                top: 0,
                color: "#fff",
                opacity: 0.5,
                animation: "sfanim 30s linear infinite",
                textShadow:
                  "303px 117px, 32px 89px, 323px 119px, 98px 183px, 126px 235px, 0px 171px, 380px 61px, 269px 17px, 0px 151px, 121px 344px, 229px 136px, 237px 280px, 303px 30px, 211px 314px, 378px 285px, 10px 287px, 93px 345px, 292px 324px, 223px 292px, 156px 160px, 253px 58px, 205px 195px, 145px 106px, 79px 312px, 182px 359px, 279px 99px, 349px 124px, 5px 33px, 216px 147px, 388px 117px, 70px 295px, 149px 318px, 96px 66px, 129px 217px, 138px 218px, 241px 310px, 231px 368px, 18px 327px, 173px 213px, 118px 10px, 246px 208px, 159px 244px, 268px 376px, 167px 262px, 85px 238px, 277px 47px, 386px 192px, 259px 364px, 325px 327px, 279px 201px, 303px 517px, 32px 489px, 323px 519px, 98px 583px, 126px 635px, 0px 571px, 380px 461px, 269px 417px, 0px 551px, 121px 744px, 229px 536px, 237px 680px, 303px 430px, 211px 714px, 378px 685px, 10px 687px, 93px 745px, 292px 724px, 223px 692px, 156px 560px, 253px 458px, 205px 595px, 145px 506px, 79px 712px, 182px 759px, 279px 499px, 349px 524px, 5px 433px, 216px 547px, 388px 517px, 70px 695px, 149px 718px, 96px 466px, 129px 617px, 138px 618px, 241px 710px, 231px 768px, 18px 727px, 173px 613px, 118px 410px, 246px 608px, 159px 644px, 268px 776px, 167px 662px, 85px 638px, 277px 447px, 386px 592px, 259px 764px, 325px 727px, 279px 601px",
              }}
            >
              <p>*</p>
            </div>

            {/* Flakes layer 2 */}
            <div
              style={{
                width: sgSize,
                height: sgSize * 2,
                position: "absolute",
                top: 0,
                color: "#fff",
                animation: "sfanim 15s linear infinite",
                textShadow:
                  "375px 485px, 11px 689px, 254px 784px, 5px 686px, 266px 705px, 388px 698px, 180px 707px, 36px 413px, 74px 695px, 238px 690px, 384px 635px, 1px 694px, 45px 538px, 131px 750px, 258px 520px, 157px 705px, 96px 749px, 325px 719px, 132px 688px, 167px 511px, 303px 408px, 340px 620px, 394px 428px, 187px 748px, 217px 624px, 356px 630px, 33px 758px, 238px 762px, 357px 586px, 253px 798px, 68px 786px, 164px 662px, 119px 598px, 221px 557px, 126px 537px, 282px 503px, 11px 455px, 219px 632px, 60px 597px, 41px 529px, 247px 451px, 217px 644px, 304px 400px, 214px 421px, 287px 757px, 76px 404px, 376px 735px, 169px 572px, 245px 790px, 66px 717px, 375px 85px, 11px 289px, 254px 384px, 5px 286px, 266px 305px, 388px 298px, 180px 307px, 36px 13px, 74px 295px, 238px 290px, 384px 235px, 1px 294px, 45px 138px, 131px 350px, 258px 120px, 157px 305px, 96px 349px, 325px 319px, 132px 288px, 167px 111px, 303px 8px, 340px 220px, 394px 28px, 187px 348px, 217px 224px, 356px 230px, 33px 358px, 238px 362px, 357px 186px, 253px 398px, 68px 386px, 164px 262px, 119px 198px, 221px 157px, 126px 137px, 282px 103px, 11px 55px, 219px 232px, 60px 197px, 41px 129px, 247px 51px, 217px 244px, 304px 0px, 214px 21px, 287px 357px, 76px 4px, 376px 335px, 169px 172px, 245px 390px, 66px 317px",
              }}
            >
              <p>*</p>
            </div>
          </div>
        </div>

        {/* Foreground glass layer with shine */}
        <div
          style={{
            width: sgSize,
            height: sgSize,
            borderRadius: "100%",
            position: "absolute",
            top: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(246,246,246,0.2) 47%, rgba(237,237,237,0) 100%)",
          }}
        />

        {/* Stand curved wrapper */}
        {/* <div
          style={{
            width: sgSize * 1.4,
            height: sgSize / 3,
            position: "absolute",
            bottom: sgSize * -0.34,
            marginLeft: sgSize * -0.2,
            clipPath: "polygon(30% 10%, 70% 10%, 80% 100%, 20% 100%)",
          }}
        >
          <div
            style={{
              height: 180,
              width: 500,
              borderRadius: "50%",
              border: "100px solid maroon",
              position: "absolute",
              bottom: 0,
              left: -70,
            }}
          />
        </div> */}
      </div>

      <style>{`
        @keyframes sfanim {
          0% { transform: translate(0px, -400px); }
          100% { transform: translate(0px, 0px); }
        }
      `}</style>
    </div>
  );
};

export default SnowGlobe;
