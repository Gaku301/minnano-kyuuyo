import { NextPage } from "next";


const PrivacyPolicy: NextPage = () => {
  return (
    <div className="my-10 w-4/5 text-left">
      <h1 className="text-4xl font-bold sm:mx-0 py-5">プライバシーポリシー</h1>
      <div className="py-5">
        <p>Gakux（以下，「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。</p>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold sm:mx-0">第1条（個人情報）</h3>
        <div className="py-5">
          <p>「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold sm:mx-0">第2条（個人情報の収集方法）</h3>
        <div className="py-5">
          <p>当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。</p>
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold sm:mx-0">第3条（個人情報を収集・利用する目的）</h3>
        <div className="py-5">
          <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
          <ul className="list-decimal px-10 pt-5">
            <li>本サービスの提供・運営のため</li>
            <li>上記の利用目的に付随する目的</li>
          </ul>
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold sm:mx-0">第4条（利用目的の変更）</h3>
        <div className="py-5">
          <ul className="list-decimal px-10">
            <li>当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。</li>
            <li>利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。</li>
          </ul>
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold sm:mx-0">第5条（当サイトに掲載されている広告について）</h3>
        <div className="py-5">
          <p>本サービスでは、第三者配信の広告サービス（Googleアドセンス）を利用しています。</p>
          <p>このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、本サービスや他サイトへのアクセスに関する情報 『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。</p>
          <p>
            またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
            <a href="https://policies.google.com/technologies/ads?gl=jp" target="_blank" rel="noreferrer" className="underline decoration-2 decoration-orange-400 hover:text-orange-400">こちら</a>
            をご覧ください。
          </p>
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-2xl font-bold sm:mx-0">第6条（当サイトが使用しているアクセス解析ツールについて）</h3>
        <div className="py-5">
          <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。</p>
          <p>このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。</p>
          <p>このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
          <p>この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。</p>
          <p>
            この規約に関して、詳しくは
            <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noreferrer" className="underline decoration-2 decoration-orange-400 hover:text-orange-400">こちら</a>
            をご覧ください。
          </p>
        </div>
      </div>

    </div>
  );
}

export default PrivacyPolicy;