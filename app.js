var s1 = 0, s2 = 0;
var round = 0;
var play = true;
var player = 0;

/*
document.querySelector('#current-' + player).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector('#current-'+player).textContent;
*/

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 00;
document.getElementById('score-1').textContent = 00;
document.getElementById('current-0').textContent = 00;
document.getElementById('current-1').textContent = 00;


document.querySelector('.btn-roll').addEventListener('click',function(){
	if(play)
	{
		var dice1 = Math.random() * 6;
		var dice = Math.floor(dice1) + 1;
		var diceDOM = document.querySelector('.dice');
		diceDOM.src = 'dice-' + dice + '.png';
		diceDOM.style.display = 'block';
		if(dice===1)
		{
			round = 0;
			document.getElementById('current-' + player).textContent = 00;
			if(player===1)
			{
				player = 0;
				document.querySelector('.player-1-panel').classList.remove('active');
				document.querySelector('.player-0-panel').classList.add('active');
			}
			else
			{
				player = 1;
				document.querySelector('.player-0-panel').classList.remove('active');
				document.querySelector('.player-1-panel').classList.add('active');
			}
		}
		else
		{
			round = round + dice;
			document.getElementById('current-' + player).textContent = round;
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(play)
	{	
		if(player===0)
		{
			s1 = s1 + round;
			round = 0;
			document.getElementById('score-' + player).textContent = s1;
			document.getElementById('current-' + player).textContent = 0;
			player = 1;
			if(s1>=100)
			{
				document.getElementById('name-0').textContent = 'Winner';
				document.querySelector('.dice').style.display = 'none';
				document.querySelector('.player-0-panel').classList.add('winner');
				document.querySelector('.player-0-panel').classList.remove('active');
				play = false;
			}
			else
			{
				document.querySelector('.player-0-panel').classList.remove('active');
				document.querySelector('.player-1-panel').classList.add('active');
			}
		}
		else
		{
			s2 = s2 + round;
			round = 0;
			document.getElementById('score-' + player).textContent = s2;
			document.getElementById('current-' + player).textContent = 0;
			player = 0;
			if(s2>=100)
			{
				document.getElementById('name-1').textContent = 'Winner';
				document.querySelector('.dice').style.display = 'none';
				document.querySelector('.player-1-panel').classList.add('winner');
				document.querySelector('.player-1-panel').classList.remove('active');
				play = false;
			}
			else
			{
				document.querySelector('.player-1-panel').classList.remove('active');
				document.querySelector('.player-0-panel').classList.add('active');
			}
		}
	}
});
document.querySelector('.btn-new').addEventListener('click',function(){
	document.getElementById('score-0').textContent = 00;
	document.getElementById('score-1').textContent = 00;
	document.getElementById('current-0').textContent = 00;
	document.getElementById('current-1').textContent = 00;
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
});