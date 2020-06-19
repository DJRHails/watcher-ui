import React from "react";
import { Icon as RimbleIcon, IconProps as RimbleIconProps, CryptoIcons } from "@rimble/icons";
import { Image } from "..";
import { Circle } from "..";
import { Text } from "..";
import { Box, BoxProps } from "../Box";

const cryptoIcons = ["Abt","Act","Ada","Adx","Ae","Agi","Agrs","Aion","Amb","Amp","Ant","Apex","Appc","Ardr","Ark","Arn","Ary","Ast","Atm","Auto","Bat","Bay","Bcbc","Bcc","Bcd","Bch","Bcn","Bco","Bcpt","Bdl","Bela","Bix","Blcn","Blk","Block","Blz","Bnb","Bnt","Bnty","Bos","Bpt","Bq","Brd","Btc","Btcd","Btcp","Btcz","Btg","Btm","Bts","Btx","Burst","Cdn","Cdt","Cenz","Chat","Chips","Cix","Clam","Cloak","Cmt","Cnd","Cnx","Cny","Cob","Coqui","Cred","Crpt","Crw","Cs","Ctr","Cvc","Dai","Dash","Dat","Data","Dbc","Dcn","Dcr","Deez","Dent","Dew","Dgb","Dgd","Dlt","Dnr","Dnt","Doge","Drgn","Dta","Dtr","Ebst","Eca","Edg","Edo","Edoge","Ela","Elf","Elix","Ella","Emc","Emc2","Eng","Enj","Eos","Eql","Equa","Etc","Eth","Ethos","Etn","Etp","Eur","Evx","Exmo","Exp","Fair","Fct","Fil","Fldc","Flo","Fsn","Ftc","Fuel","Fun","Game","Gas","Gbp","Gbx","Gbyte","Generic","Gno","Gnt","Grc","Gto","Gup","Gvt","Gxs","Hpb","Hsr","Html","Huc","Hush","Icn","Icx","Ignis","Ink","Ins","Ion","Iop","Iost","Itc","Jnt","Jpy","Kcs","Kin","Kmd","Knc","Krb","Lbc","Lend","Link","Lkk","Lrc","Lsk","Ltc","Lun","Maid","Mana","Mcap","Mco","Mda","Mds","Med","Miota","Mith","Mkr","Mln","Mnx","Mnz","Mod","Mona","Mth","Mtl","Music","Mzc","Nano","Nas","Nav","Ncash","Ndz","Nebl","Neo","Neos","Ngc","Nio","Nlc2","Nlg","Nmc","Nuls","Nxs","Nxt","Oax","Omg","Omni","Ont","Oot","Ost","Ox","Part","Pasl","Pay","Pink","Pirl","Pivx","Plr","Poa","Poe","Poly","Pot","Powr","Ppc","Ppp","Ppt","Prl","Pura","Qash","Qiwi","Qlc","Qrl","Qsp","Qtum","R","Rads","Rcn","Rdd","Rdn","Rep","Req","Rhoc","Ric","Rise","Rlc","Rpx","Rub","Rvn","Salt","San","Sbd","Sberbank","Sc","Sky","Slr","Sls","Smart","Sngls","Snm","Snt","Spank","Sphtx","Srn","Start","Steem","Storj","Storm","Strat","Sub","Sumo","Sys","Taas","Tau","Tel","Ten","Theta","Tix","Tkn","Tnb","Tnc","Tnt","Trig","Trx","Tzc","Ubq","Unity","Usd","Usdt","Utk","Ven","Veri","Via","Vib","Vibe","Vivo","Vrc","Vtc","Wabi","Wan","Waves","Wax","Wgr","Wings","Wpr","Wtc","Xas","Xbc","Xby","Xcp","Xdn","Xem","Xlm","Xmg","Xmr","Xmy","Xp","Xpa","Xpm","Xrp","Xtz","Xuc","Xvc","Xvg","Xzc","Yoyow","Zcl","Zec","Zel","Zen","Zil","Zilla","Zrx"];

export interface IconInnerProps extends Omit<RimbleIconProps, "name"> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textColor?: any; // TODO: Replace with Styled System color type
  name: RimbleIconProps["name"] | "Algo"
}

export interface IconProps extends BoxProps {
  name: string;
  innerSize?: string;
} 

const IconInner: React.FC<IconInnerProps> = ({
  name,
  size = "2em",
  color,
  textColor,
}: IconInnerProps) => {
  const [valid, setValid] = React.useState<boolean>(true);

  const rimble = <RimbleIcon name={name as RimbleIconProps["name"]} size={size} color={textColor} />;

  if (rimble) {
    return rimble;
  }

  if (valid) {
    return (
      <Image
        size={size}
        src={`https://etherscan.io/token/images/${name.toLowerCase()}_32.png`}
        onError={() => setValid(false)}
      />
    );
  }

  if (name === "Algo") {
    return (
      <Circle
        size={size}
        fontSize={size}
        backgroundColor={color}
      >
        <Image
          src={`https://algoexplorer.io/images/${name.toLowerCase()}.png`}
          size={size}
        />
      </Circle>
    );
  }

  return (
    <Circle
      size={size}
      fontSize={size}
      backgroundColor={color}
    >
      <Text
        fontSize=".7em"
        fontWeight="bold"
        color={textColor}
      >{name[0]}</Text>
    </Circle>
  );
  // return <RimbleIcon name="Generic" size={size} color={color} />;

};

export const Icon: React.FC<IconProps> = ({
  name,
  size = "2em",
  innerSize = "100%",
  color,
  backgroundColor,
  ...rest
}: IconProps) => {
  return (
    <Box size={size} {...rest}>
      <IconInner name={name as CryptoIcons} size={innerSize} color={backgroundColor} textColor={color}/>
    </Box> 
  );
};
Icon.displayName="Icon";