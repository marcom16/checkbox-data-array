<?php

	$res = [];

	if(!empty($_POST)){
		$elements = $_POST['subcat'];

		if(isset($elements)){
			if($elements!=""){

				// Convert from String to Array
				$subcat = explode(',', $elements);
				$res['data'] = $subcat;

				for ($i=0; $i < count($subcat); $i++) { 
					$res[$i] = 'You had selected the option N° '.$subcat[$i];
				}
				
			} else {
		    $res['empty'] = true;
			}
		}else {
			$res['empty'] = true;
		}
	} else {
		$res['empty'] = true;
	}

	echo json_encode($res);