/* ============================================
   AI Academy - Level 4: プロンプトエンジニアリング
   ============================================ */

const LEVEL4_DATA = {
    id: 4,
    title: "プロンプトエンジニアリング",
    icon: "🎯",
    description: "AIを使いこなすプロンプト設計の技術を習得する",
    modules: [
        {
            id: 401,
            title: "プロンプトの基本構造",
            duration: "15分",
            content: `
<h2>良いプロンプトの5要素</h2>
<p>AIから質の高い出力を得るには、プロンプト（指示文）の設計が重要です。以下の5要素を意識しましょう。</p>

<table>
<thead>
<tr><th>番号</th><th>要素</th><th>説明</th><th>例</th></tr>
</thead>
<tbody>
<tr><td>1</td><td><strong>役割（Role）</strong></td><td>AIに担ってほしい立場</td><td>「あなたは経営コンサルタントです」</td></tr>
<tr><td>2</td><td><strong>文脈（Context）</strong></td><td>現在の状況や背景情報</td><td>「今、新規事業の企画書が必要です」</td></tr>
<tr><td>3</td><td><strong>指示（Instruction）</strong></td><td>具体的に何をしてほしいか</td><td>「企画書のドラフトを作成してください」</td></tr>
<tr><td>4</td><td><strong>制約（Constraints）</strong></td><td>出力の条件</td><td>「300文字以内で」「箇条書きで」</td></tr>
<tr><td>5</td><td><strong>出力形式（Output Format）</strong></td><td>期待する出力の形</td><td>「以下の形式で出力してください：...」</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 核心</div>
「AIが期待通りの回答を出さない」のは、大半がプロンプトの問題です。明確な指示ほど、AIの出力品質は上がります。曖昧な指示→曖昧な出力、具体的な指示→具体的な出力、という関係を常に意識しましょう。
</div>

<h2>Before / After の比較</h2>
<h3>悪い例</h3>
<p>「この文章を要約して」</p>

<h3>良い例</h3>
<p>「あなたは経営コンサルタントです。以下の業績報告書を、取締役会に提出する形式で要約してください。制約：300文字以内、箇条書き3〜5項目、重要なKPIの数値は必ず含める、課題と推奨アクションを明記。出力形式：【業績サマリー】→【課題】→【推奨アクション】」</p>
`,
            quiz: [
                { id: "q401_1", type: "choice", question: "プロンプトの5要素に含まれないものはどれですか？", options: ["役割（Role）", "文脈（Context）", "感情（Emotion）", "制約（Constraints）"], answer: 2, explanation: "プロンプトの5要素は、役割・文脈・指示・制約・出力形式です。感情は含まれません。" },
                { id: "q401_2", type: "choice", question: "AIが期待通りの回答を出さない場合、最も多い原因は何ですか？", options: ["AIの性能不足", "プロンプトの曖昧さ", "インターネット接続の問題", "AIの不具合"], answer: 1, explanation: "AIが期待通りの回答を出さない原因の大半はプロンプトの問題です。明確な指示が出力品質を決めます。" },
                { id: "q401_3", type: "choice", question: "「あなたは10年経験の弁護士です」はプロンプトの5要素のうちどれに該当しますか？", options: ["指示", "制約", "役割", "出力形式"], answer: 2, explanation: "AIに担ってほしい立場や専門性を設定する「役割（Role）」に該当します。" }
            ]
        },
        {
            id: 402,
            title: "プロンプトテクニック集",
            duration: "20分",
            content: `
<h2>主要なプロンプトテクニック</h2>

<table>
<thead>
<tr><th>テクニック</th><th>使い方と効果</th><th>適用場面</th></tr>
</thead>
<tbody>
<tr><td><strong>Zero-shot</strong></td><td>例を示さずに直接指示する。「この文章を要約してください」</td><td>簡単なタスクで有効</td></tr>
<tr><td><strong>Few-shot</strong></td><td>2〜5個の例を示してから指示。「例：入力→出力」のパターン提示</td><td>出力の形式・品質をコントロールしたい場合</td></tr>
<tr><td><strong>Chain of Thought</strong></td><td>「ステップバイステップで考えてください」と指示</td><td>複雑な推論タスクの精度を大幅に向上</td></tr>
<tr><td><strong>ペルソナ設定</strong></td><td>「あなたは10年経験の○○です」と専門家を設定</td><td>回答の専門性と深さをコントロール</td></tr>
<tr><td><strong>制約の明示</strong></td><td>「○○はしないでください」「○○の範囲内で」</td><td>不要な出力を排除</td></tr>
<tr><td><strong>自己検証</strong></td><td>「回答した後、その回答を検証してください」</td><td>ハルシネーションの自己修正</td></tr>
<tr><td><strong>メタプロンプト</strong></td><td>「この課題に最適なプロンプトを作成してください」</td><td>AIにプロンプト自体を作らせる</td></tr>
</tbody>
</table>

<h2>テクニック詳細</h2>

<h3>Chain of Thought（思考の連鎖）</h3>
<p>「ステップバイステップで考えてください」と一言添えるだけで、推論タスクの精度が大幅に向上します。特に複雑な問題ほど効果が大きく、AIが中間の思考過程を明示することで論理的な回答を導きやすくなります。</p>

<h3>Few-shot プロンプティング</h3>
<p>入力と出力の例を2〜5個示すことで、AIが出力のパターンを学習します。特に独自のフォーマットやスタイルで出力してほしい場合に効果的です。</p>

<div class="info-box tip">
<div class="info-box-title">💡 テクニックの組み合わせ</div>
これらのテクニックは組み合わせることで効果が倍増します。例えば「ペルソナ設定 + Chain of Thought + 出力形式の指定」のように複数を同時に使うと、より高品質な出力が得られます。
</div>
`,
            quiz: [
                { id: "q402_1", type: "choice", question: "「ステップバイステップで考えてください」はどのテクニックに該当しますか？", options: ["Zero-shot", "Few-shot", "Chain of Thought", "メタプロンプト"], answer: 2, explanation: "Chain of Thought（思考の連鎖）は、AIに段階的に推論させるテクニックです。" },
                { id: "q402_2", type: "choice", question: "出力のフォーマットを正確にコントロールしたい場合に最も効果的なテクニックはどれですか？", options: ["Zero-shot", "Few-shot", "ペルソナ設定", "自己検証"], answer: 1, explanation: "Few-shotは入力と出力の例を示すことで、出力の形式・品質を正確にコントロールできます。" },
                { id: "q402_3", type: "choice", question: "メタプロンプトとは何ですか？", options: ["プロンプトを暗号化すること", "AIにプロンプト自体を作成させること", "プロンプトを翻訳すること", "プロンプトを短くすること"], answer: 1, explanation: "メタプロンプトとは「この課題に最適なプロンプトを作成してください」のように、AIにプロンプト自体を作らせるテクニックです。" },
                { id: "q402_4", type: "fill", question: "例を示さずに直接指示するプロンプトテクニックを何と呼びますか？（英語で）", answer: "Zero-shot", explanation: "Zero-shotは例を一切示さずに直接指示するテクニックです。" }
            ]
        },
        {
            id: 403,
            title: "ビジネス活用の実践プロンプト",
            duration: "15分",
            content: `
<h2>業務別プロンプトの実践例</h2>
<p>プロンプトの5要素とテクニックを組み合わせた、実践的なビジネス活用例を紹介します。</p>

<h3>例1：報告書の要約</h3>
<table>
<thead>
<tr><th>要素</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>役割</td><td>あなたは経営コンサルタントです</td></tr>
<tr><td>文脈</td><td>取締役会に提出する業績報告の要約が必要</td></tr>
<tr><td>指示</td><td>以下の業績報告書を要約してください</td></tr>
<tr><td>制約</td><td>300文字以内、箇条書き3〜5項目、KPI数値を含める</td></tr>
<tr><td>出力形式</td><td>【業績サマリー】【課題】【推奨アクション】</td></tr>
</tbody>
</table>

<h3>例2：メールの作成</h3>
<table>
<thead>
<tr><th>要素</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>役割</td><td>あなたはビジネスマナーに精通した秘書です</td></tr>
<tr><td>文脈</td><td>取引先に納期遅延のお詫びメールを送る必要がある</td></tr>
<tr><td>指示</td><td>お詫びメールのドラフトを作成してください</td></tr>
<tr><td>制約</td><td>フォーマルなトーン、200文字以内、具体的な対応策を含める</td></tr>
<tr><td>出力形式</td><td>件名、宛名、本文、署名の形式</td></tr>
</tbody>
</table>

<h3>例3：データ分析</h3>
<table>
<thead>
<tr><th>要素</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>役割</td><td>あなたはデータアナリストです</td></tr>
<tr><td>文脈</td><td>四半期の売上データを分析して経営会議で報告する</td></tr>
<tr><td>指示</td><td>以下のデータからトレンドと異常値を分析してください</td></tr>
<tr><td>制約</td><td>グラフの提案を含める、前年同期比を必ず言及する</td></tr>
<tr><td>出力形式</td><td>【概要】【トレンド分析】【異常値】【推奨アクション】</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意</div>
機密情報（個人データ、未公開の経営情報等）をAIに入力する際は、利用するサービスのプライバシーポリシーを必ず確認してください。Enterprise版やTeam版では、入力データが学習に使用されない設定になっていることが一般的です。
</div>
`,
            quiz: [
                { id: "q403_1", type: "choice", question: "プロンプトで「フォーマルなトーンで」と指定するのは5要素のどれに該当しますか？", options: ["役割", "文脈", "指示", "制約"], answer: 3, explanation: "「フォーマルなトーンで」は出力条件を指定する「制約（Constraints）」に該当します。" },
                { id: "q403_2", type: "choice", question: "AIに機密情報を入力する際に最も重要な確認事項はどれですか？", options: ["AIの応答速度", "サービスのプライバシーポリシー", "AIモデルのバージョン", "プロンプトの文字数"], answer: 1, explanation: "機密情報を入力する際は、データがAIの学習に使用されないかなど、プライバシーポリシーの確認が最も重要です。" },
                { id: "q403_3", type: "choice", question: "「以下の形式で出力してください：【概要】【分析】【結論】」はプロンプトの5要素のどれですか？", options: ["役割", "文脈", "制約", "出力形式"], answer: 3, explanation: "期待する出力の形を指定するのは「出力形式（Output Format）」です。" }
            ]
        }
    ]
};
