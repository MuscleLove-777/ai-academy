/* ============================================
   AI Academy - Level 6: AI倫理と未来
   ============================================ */

const LEVEL6_DATA = {
    id: 6,
    title: "AI倫理と未来",
    icon: "🌍",
    description: "AI倫理・社会的リスク・人間との協働・AI時代に求められるスキル",
    modules: [
        {
            id: 601,
            title: "AI倫理の6原則とリスク",
            duration: "20分",
            content: `
<h2>AI倫理の6つの原則</h2>
<table>
<thead>
<tr><th>番号</th><th>原則</th><th>内容</th><th>具体例</th></tr>
</thead>
<tbody>
<tr><td>1</td><td><strong>公平性（Fairness）</strong></td><td>特定の属性で差別的な結果を生まないこと</td><td>採用AIが性別で評価を変えていないか？</td></tr>
<tr><td>2</td><td><strong>透明性（Transparency）</strong></td><td>AIがどう判断したか説明可能であること</td><td>「ブラックボックス」問題への対処</td></tr>
<tr><td>3</td><td><strong>プライバシー（Privacy）</strong></td><td>個人データの適切な取り扱い</td><td>学習データに含まれる個人情報の問題</td></tr>
<tr><td>4</td><td><strong>安全性（Safety）</strong></td><td>有害なコンテンツを生成しないこと</td><td>悪用の防止</td></tr>
<tr><td>5</td><td><strong>責任（Accountability）</strong></td><td>AIの判断の責任は誰が取るのか</td><td>自動運転事故、AI診断ミスの責任所在</td></tr>
<tr><td>6</td><td><strong>人間中心（Human-Centered）</strong></td><td>AIは人間を補助するもの。置き換えるものではない</td><td>最終判断は人間が行う（Human-in-the-Loop）</td></tr>
</tbody>
</table>

<h2>AIがもたらす社会的リスク</h2>
<table>
<thead>
<tr><th>リスク</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td><strong>雇用への影響</strong></td><td>定型的な知的労働の自動化。新しい仕事の創出 vs 既存の仕事の消滅のスピード差</td></tr>
<tr><td><strong>ディープフェイク・偽情報</strong></td><td>本物と区別できない偽の画像・動画・音声。選挙操作、詐欺のリスク</td></tr>
<tr><td><strong>権力の集中</strong></td><td>AI開発に必要な巨額の資本。データを持つ者がAIを支配。少数テック企業への集中</td></tr>
<tr><td><strong>著作権・知的財産</strong></td><td>学習データの著作権問題。AI生成物の権利は誰のものか？</td></tr>
<tr><td><strong>自律型兵器（LAWS）</strong></td><td>人間の判断なしに殺傷する兵器。「キラーロボット」規制の国際議論</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 社内AI利用ガイドラインの重要性</div>
<p>組織でAIを利用する際は、以下のルールを明確にする必要があります。</p>
<ul>
<li><strong>入力してよい情報</strong>：公開情報、自作文章の推敲依頼、一般的な知識の質問</li>
<li><strong>入力してはいけない情報</strong>：顧客の個人情報、未公開の経営情報、パスワード、NDA対象情報</li>
<li><strong>出力の取り扱い</strong>：必ず人間がレビュー、事実は一次情報で確認、AI出力をそのまま外部公開しない</li>
</ul>
</div>
`,
            quiz: [
                { id: "q601_1", type: "choice", question: "AI倫理の6原則のうち、「AIがどう判断したか説明可能であること」を指す原則はどれですか？", options: ["公平性", "透明性", "安全性", "責任"], answer: 1, explanation: "透明性（Transparency）は、AIの判断過程が説明可能であることを求める原則です。" },
                { id: "q601_2", type: "choice", question: "「Human-in-the-Loop」とはどのような考え方ですか？", options: ["AIが人間を完全に代替する", "最終判断は人間が行う", "人間がAIの中に入る", "AIと人間が交代で作業する"], answer: 1, explanation: "Human-in-the-Loopは、AIの処理ループの中に人間を介在させ、最終判断は人間が行うという考え方です。" },
                { id: "q601_3", type: "choice", question: "社内AI利用ガイドラインで「入力してはいけない情報」に該当するものはどれですか？", options: ["公開情報", "一般的な知識の質問", "顧客の個人情報", "自分が作成した文章の推敲依頼"], answer: 2, explanation: "顧客の個人情報はAIに入力してはいけません。プライバシー保護とコンプライアンスの観点から厳禁です。" },
                { id: "q601_4", type: "fill", question: "AIの判断過程が不透明で説明できない問題を何と呼びますか？（カタカナ7文字）", answer: "ブラックボックス", explanation: "AIの判断過程が不透明で、なぜその結論に至ったか説明できない問題を「ブラックボックス問題」と呼びます。" }
            ]
        },
        {
            id: 602,
            title: "AIと人間の協働",
            duration: "15分",
            content: `
<h2>AIと人間の得意・不得意</h2>
<table>
<thead>
<tr><th>タスク</th><th>AI</th><th>人間</th></tr>
</thead>
<tbody>
<tr><td>大量データの処理</td><td>圧勝</td><td>限界あり</td></tr>
<tr><td>パターン認識</td><td>超高速</td><td>直感的</td></tr>
<tr><td>24時間稼働</td><td>疲れない</td><td>休息が必要</td></tr>
<tr><td>一貫性</td><td>ブレない</td><td>気分に左右</td></tr>
<tr><td>創造性</td><td>組合せ型</td><td>真の独創性</td></tr>
<tr><td>共感・感情理解</td><td>模倣のみ</td><td>本質的</td></tr>
<tr><td>倫理的判断</td><td>学習依存</td><td>文脈理解</td></tr>
<tr><td>未知の状況対応</td><td>学習外は弱い</td><td>応用力</td></tr>
<tr><td>意思決定の責任</td><td>取れない</td><td>最終責任者</td></tr>
</tbody>
</table>

<h2>5つの協働パターン</h2>
<table>
<thead>
<tr><th>パターン</th><th>関係性</th><th>例</th></tr>
</thead>
<tbody>
<tr><td><strong>AI as Tool（道具）</strong></td><td>人間が指示 → AIが実行 → 人間が確認</td><td>翻訳、文章校正、コード生成</td></tr>
<tr><td><strong>AI as Assistant（助手）</strong></td><td>人間が方向性 → AIが素案作成 → 人間が編集</td><td>企画書の下書き、リサーチ、データ分析</td></tr>
<tr><td><strong>AI as Advisor（相談役）</strong></td><td>人間が問いかけ → AIが多角的に分析 → 人間が判断</td><td>戦略の壁打ち、リスク分析、シナリオ検討</td></tr>
<tr><td><strong>AI as Collaborator（共同作業者）</strong></td><td>人間とAIが交互に作業 → 相乗効果</td><td>AIがコード → 人間がレビュー → AIが修正</td></tr>
<tr><td><strong>AI as Autonomous Agent（自律エージェント）</strong></td><td>人間が目標設定 → AIが自律的に遂行 → 人間が監督</td><td>モニタリング、定型レポート自動生成</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 進化の方向</div>
協働パターンは Tool → Assistant → Advisor → Collaborator → Autonomous Agent の順に進化しています。ただし、最も自律的なパターン（Autonomous Agent）でも「最終判断と責任は人間」が原則です。
</div>
`,
            quiz: [
                { id: "q602_1", type: "choice", question: "AIと人間を比較した場合、AIが「取れない」とされる能力はどれですか？", options: ["大量データの処理", "パターン認識", "24時間稼働", "意思決定の責任"], answer: 3, explanation: "意思決定の責任はAIには取れません。最終責任は必ず人間にあります。" },
                { id: "q602_2", type: "choice", question: "「AI as Advisor」パターンの特徴はどれですか？", options: ["AIが指示を実行するだけ", "人間が問いかけ、AIが多角的に分析し、人間が判断", "AIが全てを自律的に遂行", "AIが素案を作り人間が編集"], answer: 1, explanation: "AI as Advisor（相談役）は、人間が問いかけ、AIが多角的に分析し、最終判断は人間が行うパターンです。" },
                { id: "q602_3", type: "choice", question: "最も自律的なAI協働パターンでも守るべき原則はどれですか？", options: ["AIに全権限を委譲する", "最終判断と責任は人間にある", "人間はAIに一切関与しない", "AIの判断を無条件に受け入れる"], answer: 1, explanation: "どの協働パターンでも「最終判断と責任は人間」が原則です。" }
            ]
        },
        {
            id: 603,
            title: "AI時代に求められるスキルと未来",
            duration: "20分",
            content: `
<h2>AI時代に価値が上がるスキル</h2>
<table>
<thead>
<tr><th>番号</th><th>スキル</th><th>理由</th></tr>
</thead>
<tbody>
<tr><td>1</td><td><strong>問いを立てる力（Question Design）</strong></td><td>AIは「答え」は出せるが「問い」は立てられない。正しい問いが正しい答えを引き出す</td></tr>
<tr><td>2</td><td><strong>判断力・意思決定力</strong></td><td>不確実な状況で「決める」力。AIの出力を評価し最終判断する力</td></tr>
<tr><td>3</td><td><strong>共感力・コミュニケーション力</strong></td><td>人間同士の信頼構築はAIに代替できない。リーダーシップ、交渉</td></tr>
<tr><td>4</td><td><strong>創造性・独自の視点</strong></td><td>AIは既存パターンの組み合わせが得意。「まだ誰も考えていないこと」を生む力</td></tr>
<tr><td>5</td><td><strong>AIリテラシー</strong></td><td>プロンプト設計、ツール選定、出力評価。AIの限界を理解した上で最大限活用する力</td></tr>
<tr><td>6</td><td><strong>倫理観・責任感</strong></td><td>AIの判断に対する最終責任を持つ覚悟。「便利だから」で思考停止しない姿勢</td></tr>
</tbody>
</table>

<h2>AIの未来 ── 短期と中期の見通し</h2>

<h3>短期（1〜3年）</h3>
<ul>
<li><strong>マルチモーダルの進化</strong>：テキスト+画像+音声+動画のシームレスな統合</li>
<li><strong>AIエージェントの実用化</strong>：複数ステップのタスクを自律的に遂行</li>
<li><strong>業務システムへのAI組込み</strong>：CRM・ERP・グループウェアにAIが標準搭載</li>
<li><strong>ローカルLLMの普及</strong>：スマホ・PCで動く小型高性能モデル</li>
<li><strong>規制の整備</strong>：EU AI Act、日本のAI基本法・ガイドラインの整備</li>
</ul>

<h3>中期（3〜10年）</h3>
<ul>
<li><strong>AGIへの接近？</strong>：人間と同等の汎用知能の実現可能性（議論中）</li>
<li><strong>科学研究のAI化</strong>：新薬開発、材料科学、数学の定理証明</li>
<li><strong>教育の根本的変革</strong>：一人一人にAIチューターがつく</li>
<li><strong>労働市場の構造変化</strong>：ホワイトカラーの仕事の再定義</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">💡 AI時代のサバイバル戦略</div>
<ol>
<li><strong>Phase 1：まず使う</strong> ── ChatGPT/Claude/Copilotを日常的に使う</li>
<li><strong>Phase 2：使いこなす</strong> ── プロンプトエンジニアリングを学び、業務に適用</li>
<li><strong>Phase 3：仕組みを理解する</strong> ── 機械学習の基本と限界・リスクを正しく認識</li>
<li><strong>Phase 4：差別化する</strong> ── AI x 自分の専門性のかけ算。AIにできないことを磨く</li>
</ol>
<p>最も危険なのは「AIを無視すること」。最も賢いのは「AIの本質を理解した上で使う」ことです。</p>
</div>

<h2>まとめ ── AIとの正しい距離感</h2>
<p>AIは「魔法」でも「脅威」でもなく、「道具」であり「パートナー」です。</p>
<ul>
<li><strong>過大評価してはいけない</strong>：「AIが何でも解決してくれる」は幻想</li>
<li><strong>過小評価してもいけない</strong>：「AIなんて大したことない」は思考停止</li>
</ul>
<p>「AIに使われる人」ではなく、「AIを使いこなす人」になるために必要なのは、恐れでも崇拝でもなく、<strong>冷静な理解と不断の学び</strong>です。</p>
`,
            quiz: [
                { id: "q603_1", type: "choice", question: "AI時代に最も価値が上がるスキルの一つとして挙げられる「Question Design」とはどのような力ですか？", options: ["質問に答える力", "正しい問いを立てる力", "テストの問題を作る力", "AIに命令する力"], answer: 1, explanation: "AIは答えは出せても問いは立てられません。正しい問いを立てる力（Question Design）がAI時代に最も重要なスキルの一つです。" },
                { id: "q603_2", type: "choice", question: "AI時代のサバイバル戦略で「最も危険なこと」は何ですか？", options: ["AIを使いすぎること", "AIを無視すること", "AIに質問すること", "AIを学ぶこと"], answer: 1, explanation: "最も危険なのは「AIを無視すること」です。技術の進化を無視して従来の方法に固執するリスクが最も大きいです。" },
                { id: "q603_3", type: "choice", question: "AIとの正しい距離感としてふさわしいものはどれですか？", options: ["AIは万能な魔法である", "AIは恐ろしい脅威である", "AIは道具でありパートナーである", "AIは完全に無視すべきものである"], answer: 2, explanation: "AIは「魔法」でも「脅威」でもなく、「道具」であり「パートナー」です。冷静な理解と不断の学びが必要です。" },
                { id: "q603_4", type: "fill", question: "短期（1〜3年）で普及が見込まれる、スマホやPCで動く小型AIモデルの通称は？（カタカナ4文字+アルファベット3文字）", answer: "ローカルLLM", explanation: "ローカルLLMは、スマホやPCなどのデバイス上でローカルに動作する小型高性能言語モデルです。" }
            ]
        }
    ]
};
