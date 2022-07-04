var num = 1
var q = {
  1: {
    title: '두둥- 눈을 뜨니 낯선 공간이 보인다. 여기는 ,,, 처,,천국?',
    type: 'TF',
    A: '엥!!!! 내가 천국에 왔다고? 어쩌다가? 왜 ? 무슨 일이 있었지?',
    B: '아니 이게 뭐야… 나 돌아갈래.. 아직 하고 싶은게 많다고!!',
  },
  2: {
    title: '돌아갈 수 없다는 걸 알아버린 당신, 진정하고 일어선다',
    type: 'EI',
    A: '걷다보면 뭐가 나오지 않을까? 주변을 살피며 걷기 시작한다.',
    B: ' 이 공간은 뭘까? 움직였다가 다시 찾아올수 있을까? 그 자리에서 상황을 살핀다',
  },
  3: {
    title: '이때 눈앞에 나타난 정체 불명의 망고! 영롱한 빛을 내고 있다.',
    type: 'SN',
    A: '망고? 배고팠는데 마침 잘 됐다! 먹기 위해 손을 뻗는다',
    B: '어디서 생긴 거지? 먹어도 되는걸까? 조금 기다려본다',
  },
  4: {
    title: '망고에서 나온 빛이 나에게 흡수됐다. 마을이 보이기 시작했다! 바로 앞에 문이 보이는데?',
    type: 'SN',
    A: ' 바로 앞에 문이 있네 들어가보자!',
    B: '마을에 뭐가 있는지 한번 둘러봐야겠다!',
  },
  5: {
    title: '오래전 무지개 다리를 건넌 반려동물 하다를 만났다.',
    type: 'SN',
    A: '너무 행복하다 하다를 다시 볼 수 있다니! ',
    B: '그동안 잘 지낸거야?! 어디서 누가 돌봐주신거지!? ',
  },
  6: {
    title: "'잘 지냈어? 기다리고 있었어. 보고싶었어'. 하다가 말을 건넨다",
    type: 'TF',
    A: '우리 하다가 말을..?!?! 어안이 벙벙하지만 드디어 하다의 생각을 알 수 있으니 다행이다.',
    B: '우리 하다가 내가 많이 보고 싶었구나…ㅠㅠ 나도 너무 보고싶었어 하다야.',
  },
  7: {
    title: '하다와 함께 다시 길을 떠난 당신, 하다와 하고 싶은 일이 생각난다.',
    type: 'EI',
    A: '하다의 친구들이 모여있는 신나는 페스티벌에 간다.',
    B: '포근한 안락의자에 앉아 그동안 어떻게 지냈는지 하다와 이야기를 나눈다.',
  },
  8: {
    title: '내가 이야기를 지난 이야기를 다할 때까지 기다려준 하다가 그럴 줄 알았다는 듯이 말한다. 역시 못 해내는 게 없구나! 노력 많이 했겠다.',
    type: 'TF',
    A: '못 해내는 게 없다니.. 난 최고야',
    B: '나의 노력을 알아주다니… 감동이야',
  },
  9: {
    title: '하다의 따스함에 스르르 눈이 감길 때쯤 쿵하는 소리에 눈을 뜨니 내 침대에서 떨어졌다.이잉? 꿈이었다고?',
    type: 'EI',
    A: '하다도 내가 보고 싶엇나봐!!! 당장 친구에게 전화를 걸어 이야기한다.',
    B: '하다가 잘 지내고 있다는 걸 알려주고 싶었나봐.. 노트를 꺼내 일기를 쓴다.',
  },
}
var result = {
  IST: {
    finale: '계획은 계획일 뿐. 목표가 확실하면 된다!  상황에 따라 움직이는 유연한 <strong>수목장</strong>',
    explain:
      '안드로이드급의 무표정으로 느긋하게 있는 것처럼 보이지만 언제든지 다른 방향으로 움직일 수 있도록 머리에서 이미 계산을 다 굴리고 있어요. 이미 세워진 계획이 있더라도 목표를 더 잘 달성하기 위해서라면 다 뒤집더라도 다시 할 수 있는 용기를 가지고 있어요. 꽂힌 일은 사막에서 바늘찾는 일을 하는 것처럼 꼼꼼하게하지만 그렇지 않으면 손에서 놓아버리는 과감함도 가지고 있어요. 하지만 때로는 생각만 과감하고 행동은 뜨뜻미지근한 경우가 있어 이상과 현실의 괴리감에 빠지기도 해요.',
    img: 'tree.jpg',
  },
  ISF: {
    finale: '모로 가도 서울로만 가면 돼! 계획 하나가 틀어져도 긍정적인 온화한 <strong>바다장</strong>',
    explain:
      '비행기 티켓만 끊어도 내가 할 수 있는 여행 계획은 다 한 것! 이미 목적지를 정한 것만으로도 큰 일을 생각했다고 생각해요. 때에 따라 바꿀 수 있는게 계획이고, 내가 원하는 바만 이룰 수 있다면 유연하게 생각하며 움직여요. 웬만해서는 항상 여유롭고, 재미있게 일을 진행하고 싶어해요. 그렇다보니 결정을 내려야하는 순간이 온다면 최대한 피하고 싶어해요.',
    img: 'sea.jpg',
  },
  INF: {
    finale: '내 계획이 가장 나답고 완벽한 계획이야. 나잘알 <strong>산호장</strong>',
    explain:
      '나는 내가 제일 좋아.. 나만큼 나를 잘 아는 사람은 없어! 내가 세운 계획이 정말 의미있다고 믿기 때문에 강한 추진력으로 실행할 수 있어요. 평소에 자기 자신을 잘 파악하고 있고 믿고 있기 때문에 본인이 세운 계획에 있어 자신감이 넘쳐요. 일이 진행되면서 일어나는 평가에 객관적이고 냉철한 편이에요. 하지만, 실행하는 중간에 생각대로 진행되지 않는다면  그 다음 단계로 가는데 망설임을 느끼곤 해요. ',
    img: 'coral.jpg',
  },
  INT: {
    finale: '계획은 여러개 있을 수록 좋아! a안부터 d안까지 계획을 만들어 움직이는 <strong>사이버장</strong>',
    explain:
      '계획이 틀어져? 오히려 좋아. 다른 계획들도 짜볼 수 있으니까! 라고 생각하는 당신. 계획은 많으면 많을수록 변수에 대항할 수 있다고 생각해요. 사실, 실행하는 과정보다 계획을 세울 때 더 재미를 느껴요. 그래서 계획은 a안부터 d안까지 계속해서 만들어나가지만 계획은 계획일 뿐, 즉흥적으로 행동할 때가 많아요. 반복되는 걸 좋아하지 않는 성향때문에 시행착오를 겪을 일이 많겠지만, 호기심이 가득한 당신에겐 시행착오조차 즐거움으로 다가올 거에요.',
    img: 'cyber.jpg',
  },
  EST: {
    finale: '백문이불여일견, 계획은 세우되 행동이 우선! 일단 뭐라도 해봐야 직성이 풀리는 <strong>열기구장</strong>',
    explain:
      '월급 3일 전, 계좌 잔고 520원. 하지만 어떻게든 잘 되지 않을까?라고 생각하며 긍정적으로 세상을 바라보는 시각을 가지고 있어요. 직접적인 경험을 통해 얻는 것이 더 소중하다고 생각하기 때문에 계획을 짜서 그대로 움직이는 거에는 흥미를 느끼지 못해요. 혹시라도 계획을 진행함에 있어 어려움이 생긴다면 기가막힌 순발력으로 타협점을 찾아 진행해요. 오늘의 할 일을 내일로 미루는 게 특기이긴 하지만 순발력이 좋고 긍정적이기 때문에 모든 순간에 즐거움을 느껴요.',
    img: 'hotairballoon.jpg',
  },
  ESF: {
    finale: '매일 반복되는 일상이 지루해! 계획적인건 싫어! 언제나 새로운 자극제를 찾아다니는 <strong>폭죽장</strong>',
    explain:
      '계획이 곧 족쇄. 계획을 세워 진행하는 일은 틀에 맞춰 사는 것 같아 답답함을 느끼는 자유로운 영혼의 소유자에요. 가끔씩 세우는 계획은 여행이나 운동같이 액티비티성이 강한 활동들을 위한 것이에요. 계획이 틀어져도 상관없어요. 내일은 내일의 해가 뜬다고 생각하기 때문이에요. 하지만 발등에 불이 떨어진 경우 빠르게 일을 처리하는 편이에요.',
    img: 'firecracker.jpg',
  },
  ENF: {
    finale: '반짝이는 아이디어로 새로운 계획을 짜 지루할 틈이 없는 <strong>다이아몬드장</strong>',
    explain:
      '새로운 계획, 새로워, 늘 짜릿해. 도중에 계획이 틀어져도 상관없어요, 아이디어가 반짝반짝 떠오르기 때문이죠. 계획적으로 해야하나 싶으면서도 계획을 세워 시작하면 끝없는 추진력을 얻어 일을 진행하는 타입이에요. 새로운 시도를 좋아해 중간중간 새롭게 계획되는 일들이 있어도 주저하지 않아요. 집단 생활에서 계획이 잘 되어가고 있다면 좋아하는 동료들의 모습을 보고 더 힘을 얻어 일을 추진해요.',
    img: 'diamond.jpg',
  },
  ENT: {
    finale: '새로운 도전은 언제나 좋아! 새롭게 정해진 계획을 당황하지 않고 즐기는 <strong>우주장</strong>',
    explain:
      '낯선 계획에서, 가장 재밌는 냄새가 난다..도전적인 걸 좋아하기 때문에 정해진 계획대로 움직이는 건 지양해요. 단순 반복적인 일은 지루해요. 어려워 보여도 새롭게 시도해 해결할 수 있는 일을 더 선호해요. 가끔 엄청난 계획이 떠올라서 메모를 해두지만, 그걸 다시 열어보지 않는 매력이 있어요. 아이디어가 넘치는 당신. 아이디어를 이루기 위해 조금은 계획적으로 움직이면 더 발전할 수 있을 거에요!',
    img: 'space.jpg',
  },
}
function start() {
  $('.start').hide()
  $('.question').show()
  next()
}
$('#A').click(function () {
  var type = $('#type').val()
  var preValue = $('#' + type).val()
  $('#' + type).val(parseInt(preValue) + 1)
  next()
})
$('#B').click(function () {
  next()
})
function next() {
  if (num == 10) {
    $('.question').hide()
    $('.result').show()
    var mbti = ''
    $('#EI').val() < 2 ? (mbti += 'I') : (mbti += 'E')
    $('#SN').val() < 2 ? (mbti += 'N') : (mbti += 'S')
    $('#TF').val() < 2 ? (mbti += 'F') : (mbti += 'T')
    $('#img').attr('src', 'img/' + result[mbti]['img'])
    $('#finale').html(result[mbti]['finale'])
    $('#explain').html(result[mbti]['explain'])
  } else {
    $('.progress-bar').attr('style', 'width: calc(100/9*' + num + '%)')
    $('#title').html(q[num]['title'])
    $('#type').val(q[num]['type'])
    $('#A').html(q[num]['A'])
    $('#B').html(q[num]['B'])
    num++
  }
}

// Copyright
const yearEl = document.querySelector('.copyright-text')
yearEl.innerHTML = `Copyright ${new Date().getFullYear()} navinari all rights reserved`
